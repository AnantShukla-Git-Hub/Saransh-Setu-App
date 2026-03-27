from fastapi import FastAPI, Depends, HTTPException, status, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from datetime import datetime, timedelta
from typing import Optional, List
import os
import shutil
from dotenv import load_dotenv
from database import init_db, get_db, User, Document, Meeting, Issue, Schedule, AuditLog
from auth import authenticate_user, create_access_token, get_current_user, get_password_hash
from pydantic import BaseModel
from ollama_helper import (
    check_ollama_connection, summarize_document, translate_text,
    generate_speech, summarize_meeting, answer_query
)
from chromadb_helper import add_document_to_vectordb, search_documents
from document_processor import process_document
import uuid
from apscheduler.schedulers.background import BackgroundScheduler
from apscheduler.triggers.interval import IntervalTrigger

load_dotenv()
init_db()

app = FastAPI(title="Saransh Setu API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Background scheduler for cleanup tasks
scheduler = BackgroundScheduler()

def cleanup_old_meetings():
    """Delete meetings older than 7 days after their end date"""
    try:
        db = next(get_db())
        cutoff_date = datetime.now() - timedelta(days=7)
        
        # Delete old meetings
        deleted = db.query(Meeting).filter(Meeting.date < cutoff_date).delete()
        db.commit()
        
        if deleted > 0:
            print(f"Cleaned up {deleted} old meetings")
    except Exception as e:
        print(f"Cleanup error: {e}")
    finally:
        db.close()

def cleanup_old_schedules():
    """Delete schedules older than 30 days after their date"""
    try:
        db = next(get_db())
        cutoff_date = datetime.now() - timedelta(days=30)
        
        # Delete old schedules
        deleted = db.query(Schedule).filter(Schedule.date < cutoff_date).delete()
        db.commit()
        
        if deleted > 0:
            print(f"Cleaned up {deleted} old schedules")
    except Exception as e:
        print(f"Cleanup error: {e}")
    finally:
        db.close()

# Schedule cleanup tasks
scheduler.add_job(
    func=cleanup_old_meetings,
    trigger=IntervalTrigger(hours=24),  # Run daily
    id='cleanup_meetings',
    name='Clean up old meetings',
    replace_existing=True
)

scheduler.add_job(
    func=cleanup_old_schedules,
    trigger=IntervalTrigger(hours=24),  # Run daily
    id='cleanup_schedules',
    name='Clean up old schedules',
    replace_existing=True
)

scheduler.start()

# Pydantic Models
class Token(BaseModel):
    access_token: str
    token_type: str

class TranslateRequest(BaseModel):
    text: str
    from_language: str
    to_language: str

class SpeechRequest(BaseModel):
    title: str
    occasion: str
    context: str
    tone: str
    duration: int
    language: str
    key_points: List[str]

class MeetingRequest(BaseModel):
    title: str
    date: str
    participants: str
    notes: str
    language: str

class QueryRequest(BaseModel):
    question: str
    search_context: str
    language: str

class IssueRequest(BaseModel):
    title: str
    description: str
    category: str
    location: str
    priority: str
    reported_by_name: str

class ScheduleRequest(BaseModel):
    title: str
    description: str
    start_time: str
    end_time: str
    location: str
    priority: str

def log_action(db: Session, user_id: int, action: str, details: str = None):
    """Log user action to audit log"""
    try:
        log = AuditLog(user_id=user_id, action=action, details=details)
        db.add(log)
        db.commit()
    except:
        pass

@app.post("/token", response_model=Token)
async def login(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    user = authenticate_user(db, form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token = create_access_token(data={"sub": user.username})
    user.last_login = datetime.utcnow()
    db.commit()
    log_action(db, user.id, "login", f"User {user.username} logged in")
    return {"access_token": access_token, "token_type": "bearer"}

@app.get("/")
async def root():
    return {"message": "Saransh Setu API", "version": "1.0.0", "status": "running"}

@app.get("/health")
async def health_check():
    ollama_status = "connected" if check_ollama_connection() else "disconnected"
    return {
        "status": "healthy",
        "timestamp": datetime.now().isoformat(),
        "services": {"database": "connected", "ollama": ollama_status}
    }

@app.get("/dashboard/stats")
async def get_dashboard_stats(current_user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    return {
        "documents": db.query(Document).count(),
        "meetings": db.query(Meeting).count(),
        "issues": db.query(Issue).count(),
        "schedules": db.query(Schedule).count(),
        "speeches": 0,
        "audit_logs": db.query(AuditLog).count()
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)


# Document APIs
@app.post("/documents/upload")
async def upload_document(
    file: UploadFile = File(...),
    language: str = Form("English"),
    summary_length: str = Form("Medium"),
    tags: str = Form(""),
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Upload and summarize document"""
    try:
        # Validate file size (25MB max)
        file.file.seek(0, 2)
        file_size = file.file.tell()
        file.file.seek(0)
        
        if file_size > 25 * 1024 * 1024:
            raise HTTPException(status_code=400, detail="File too large. Maximum size is 25MB")
        
        # Validate file type
        file_ext = file.filename.split('.')[-1].lower()
        if file_ext not in ['pdf', 'docx', 'txt']:
            raise HTTPException(status_code=400, detail="Invalid file type. Only PDF, DOCX, TXT allowed")
        
        # Save file
        upload_dir = "uploads"
        os.makedirs(upload_dir, exist_ok=True)
        file_id = str(uuid.uuid4())
        file_path = os.path.join(upload_dir, f"{file_id}.{file_ext}")
        
        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)
        
        # Extract text
        text = process_document(file_path, file_ext)
        if not text:
            raise HTTPException(status_code=400, detail="Could not extract text from document")
        
        # Generate summary
        summary = summarize_document(text, language, summary_length)
        
        # Save to database
        doc = Document(
            filename=file_id,
            original_filename=file.filename,
            file_path=file_path,
            file_type=file_ext,
            summary=summary,
            language=language,
            uploaded_by=current_user.id
        )
        db.add(doc)
        db.commit()
        db.refresh(doc)
        
        # Add to vector database
        add_document_to_vectordb(
            str(doc.id),
            text,
            {"filename": file.filename, "type": "document", "user_id": current_user.id}
        )
        
        log_action(db, current_user.id, "document_upload", f"Uploaded {file.filename}")
        
        return {
            "id": doc.id,
            "filename": file.filename,
            "summary": summary,
            "uploaded_at": doc.uploaded_at.isoformat()
        }
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/documents")
async def get_documents(current_user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    """Get all documents"""
    docs = db.query(Document).order_by(Document.uploaded_at.desc()).all()
    return [{
        "id": doc.id,
        "filename": doc.original_filename,
        "summary": doc.summary[:200] + "..." if len(doc.summary) > 200 else doc.summary,
        "language": doc.language,
        "uploaded_at": doc.uploaded_at.isoformat()
    } for doc in docs]

@app.get("/documents/{doc_id}")
async def get_document(doc_id: int, current_user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    """Get document details"""
    doc = db.query(Document).filter(Document.id == doc_id).first()
    if not doc:
        raise HTTPException(status_code=404, detail="Document not found")
    
    return {
        "id": doc.id,
        "filename": doc.original_filename,
        "summary": doc.summary,
        "language": doc.language,
        "uploaded_at": doc.uploaded_at.isoformat()
    }

# Translation API
@app.post("/translate")
async def translate(
    request: TranslateRequest,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Translate text"""
    try:
        translation = translate_text(request.text, request.from_language, request.to_language)
        log_action(db, current_user.id, "translation", f"{request.from_language} to {request.to_language}")
        return {"translation": translation}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Speech Generation API
@app.post("/speeches/generate")
async def generate_speech_api(
    request: SpeechRequest,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Generate speech"""
    try:
        speech = generate_speech(
            request.title, request.occasion, request.context,
            request.tone, request.duration, request.language, request.key_points
        )
        log_action(db, current_user.id, "speech_generation", f"Generated speech: {request.title}")
        return {"speech": speech}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Meeting APIs
@app.post("/meetings")
async def create_meeting(
    request: MeetingRequest,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Create and summarize meeting"""
    try:
        result = summarize_meeting(request.title, request.participants, request.notes, request.language)
        
        meeting = Meeting(
            title=request.title,
            description=result["summary"],
            date=datetime.fromisoformat(request.date),
            created_by=current_user.id
        )
        db.add(meeting)
        db.commit()
        db.refresh(meeting)
        
        log_action(db, current_user.id, "meeting_created", f"Created meeting: {request.title}")
        
        return {
            "id": meeting.id,
            "summary": result["summary"],
            "action_items": result["action_items"]
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/meetings")
async def get_meetings(current_user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    """Get all meetings"""
    meetings = db.query(Meeting).order_by(Meeting.date.desc()).all()
    return [{
        "id": m.id,
        "title": m.title,
        "description": m.description[:100] + "..." if len(m.description) > 100 else m.description,
        "date": m.date.isoformat()
    } for m in meetings]

# AI Query API
@app.post("/query")
async def ai_query(
    request: QueryRequest,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Answer AI query with RAG"""
    try:
        # Search relevant documents
        context = ""
        if request.search_context != "General Knowledge":
            relevant_docs = search_documents(request.question, n_results=3)
            context = "\n\n".join([doc["text"] for doc in relevant_docs])
        
        # Generate answer
        answer = answer_query(request.question, context, request.language)
        
        log_action(db, current_user.id, "ai_query", f"Query: {request.question[:50]}")
        
        return {"answer": answer, "sources": len(context) > 0}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Constituency Tracker APIs
@app.post("/issues")
async def create_issue(
    request: IssueRequest,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Report new issue"""
    try:
        issue = Issue(
            title=request.title,
            description=request.description,
            category=request.category,
            status="Open",
            priority=request.priority,
            reported_by=current_user.id
        )
        db.add(issue)
        db.commit()
        db.refresh(issue)
        
        log_action(db, current_user.id, "issue_reported", f"Reported: {request.title}")
        
        return {"id": issue.id, "status": "created"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/issues")
async def get_issues(current_user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    """Get all issues"""
    issues = db.query(Issue).order_by(Issue.created_at.desc()).all()
    return [{
        "id": i.id,
        "title": i.title,
        "category": i.category,
        "status": i.status,
        "priority": i.priority,
        "created_at": i.created_at.isoformat()
    } for i in issues]

@app.get("/issues/stats")
async def get_issue_stats(current_user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    """Get issue statistics"""
    total = db.query(Issue).count()
    in_progress = db.query(Issue).filter(Issue.status == "In Progress").count()
    resolved = db.query(Issue).filter(Issue.status == "Resolved").count()
    pending = db.query(Issue).filter(Issue.status == "Open").count()
    
    return {
        "total": total,
        "in_progress": in_progress,
        "resolved": resolved,
        "pending": pending
    }

# Schedule APIs
@app.post("/schedules")
async def create_schedule(
    request: ScheduleRequest,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Create schedule event"""
    try:
        # Parse datetime - handle both ISO format and datetime-local format
        start_time_str = request.start_time.replace('T', ' ') if 'T' in request.start_time else request.start_time
        try:
            schedule_date = datetime.fromisoformat(request.start_time)
        except:
            # Fallback: try parsing as datetime-local format
            schedule_date = datetime.strptime(start_time_str, '%Y-%m-%d %H:%M')
        
        schedule = Schedule(
            title=request.title,
            description=request.description,
            date=schedule_date,
            created_by=current_user.id
        )
        db.add(schedule)
        db.commit()
        db.refresh(schedule)
        
        log_action(db, current_user.id, "schedule_created", f"Created: {request.title}")
        
        return {"id": schedule.id, "status": "created"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/schedules")
async def get_schedules(current_user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    """Get all schedules"""
    schedules = db.query(Schedule).order_by(Schedule.date).all()
    return [{
        "id": s.id,
        "title": s.title,
        "description": s.description,
        "date": s.date.isoformat()
    } for s in schedules]

# Audit Log API
@app.get("/audit-logs")
async def get_audit_logs(
    user_filter: Optional[str] = None,
    action_filter: Optional[str] = None,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Get audit logs"""
    query = db.query(AuditLog).join(User)
    
    if user_filter:
        query = query.filter(User.username.contains(user_filter))
    if action_filter and action_filter != "All Actions":
        query = query.filter(AuditLog.action.contains(action_filter))
    
    logs = query.order_by(AuditLog.timestamp.desc()).limit(100).all()
    
    return [{
        "id": log.id,
        "timestamp": log.timestamp.isoformat(),
        "user": db.query(User).filter(User.id == log.user_id).first().username,
        "action": log.action,
        "details": log.details or ""
    } for log in logs]

# Shutdown event
@app.on_event("shutdown")
def shutdown_event():
    """Shutdown scheduler gracefully"""
    scheduler.shutdown()
    print("Scheduler shut down successfully")
