import requests
import json
from typing import Optional, List, Dict
import os

OLLAMA_BASE_URL = os.getenv("OLLAMA_BASE_URL", "http://localhost:11434")
OLLAMA_MODEL = os.getenv("OLLAMA_MODEL", "llama3:8b")

def check_ollama_connection() -> bool:
    """Check if Ollama is running"""
    try:
        response = requests.get(f"{OLLAMA_BASE_URL}/api/tags", timeout=5)
        return response.status_code == 200
    except:
        return False

def generate_text(prompt: str, system_prompt: Optional[str] = None, max_tokens: int = 2000) -> str:
    """Generate text using Ollama"""
    try:
        payload = {
            "model": OLLAMA_MODEL,
            "prompt": prompt,
            "stream": False,
            "options": {
                "num_predict": max_tokens,
                "temperature": 0.7
            }
        }
        
        if system_prompt:
            payload["system"] = system_prompt
        
        response = requests.post(
            f"{OLLAMA_BASE_URL}/api/generate",
            json=payload,
            timeout=120
        )
        
        if response.status_code == 200:
            result = response.json()
            return result.get("response", "")
        return ""
    except Exception as e:
        print(f"Ollama error: {e}")
        return ""

def summarize_document(text: str, language: str = "English", length: str = "Medium") -> str:
    """Summarize document text"""
    length_tokens = {"Short": 500, "Medium": 1000, "Long": 2000}
    
    system_prompt = f"You are a helpful assistant that creates clear, concise summaries in {language}."
    
    prompt = f"""Summarize the following document in {language}. 
Length: {length} (approximately {length_tokens.get(length, 1000)} words)

Document:
{text[:10000]}

Provide a well-structured summary with key points."""
    
    return generate_text(prompt, system_prompt, length_tokens.get(length, 1000))

def translate_text(text: str, from_lang: str, to_lang: str) -> str:
    """Translate text between languages"""
    system_prompt = "You are an expert translator for Indian languages. Provide accurate, natural translations."
    
    prompt = f"""Translate the following text from {from_lang} to {to_lang}.
Maintain the original meaning and tone.

Text to translate:
{text}

Translation:"""
    
    return generate_text(prompt, system_prompt, 1000)

def generate_speech(title: str, occasion: str, context: str, tone: str, 
                   duration: int, language: str, key_points: List[str]) -> str:
    """Generate speech content"""
    system_prompt = f"You are a professional speechwriter creating speeches in {language}."
    
    key_points_text = "\n".join([f"- {point}" for point in key_points])
    
    prompt = f"""Create a {tone} speech in {language} for the following:

Title: {title}
Occasion: {occasion}
Context: {context}
Duration: {duration} minutes
Tone: {tone}

Key Points to Cover:
{key_points_text}

Write a complete, well-structured speech that is appropriate for the occasion and covers all key points."""
    
    return generate_text(prompt, system_prompt, duration * 200)

def summarize_meeting(title: str, participants: str, notes: str, language: str) -> Dict[str, any]:
    """Summarize meeting and extract action items"""
    system_prompt = f"You are an assistant that summarizes meetings and extracts action items in {language}."
    
    prompt = f"""Analyze this meeting and provide:
1. A concise summary
2. List of action items with responsible persons

Meeting: {title}
Participants: {participants}
Notes:
{notes}

Format your response as:
SUMMARY:
[summary here]

ACTION ITEMS:
- [action item 1]
- [action item 2]
"""
    
    response = generate_text(prompt, system_prompt, 1500)
    
    # Parse response
    parts = response.split("ACTION ITEMS:")
    summary = parts[0].replace("SUMMARY:", "").strip()
    action_items = []
    
    if len(parts) > 1:
        items = parts[1].strip().split("\n")
        action_items = [item.strip("- ").strip() for item in items if item.strip()]
    
    return {
        "summary": summary,
        "action_items": action_items
    }

def answer_query(question: str, context: str, language: str) -> str:
    """Answer query using context and general knowledge"""
    system_prompt = f"You are a knowledgeable AI assistant answering questions in {language}."
    
    if context:
        prompt = f"""Based on the following context and your knowledge, answer this question in {language}:

Context:
{context[:5000]}

Question: {question}

Provide a clear, accurate answer:"""
    else:
        prompt = f"""Answer this question in {language}:

Question: {question}

Provide a clear, accurate answer:"""
    
    return generate_text(prompt, system_prompt, 1500)
