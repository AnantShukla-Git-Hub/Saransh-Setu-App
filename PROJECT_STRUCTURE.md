# Saransh Setu - Project Structure

```
Saransh-Setu-FINAL-PROJECT/
│
├── backend/                      # Python FastAPI Backend
│   ├── venv/                     # Python virtual environment (created during setup)
│   ├── main.py                   # Main FastAPI application
│   ├── database.py               # Database models and connection
│   ├── auth.py                   # Authentication logic
│   ├── requirements.txt          # Python dependencies
│   ├── .env                      # Environment variables (created during setup)
│   ├── .env.example              # Example environment file
│   ├── saransh_setu.db          # SQLite database (created during setup)
│   └── chroma_data/              # ChromaDB vector storage (created at runtime)
│
├── frontend/                     # HTML/CSS/JS Frontend
│   ├── css/
│   │   ├── startup.css           # Startup screen styles
│   │   ├── login.css             # Login page styles
│   │   └── dashboard.css         # Dashboard and all pages styles
│   ├── js/
│   │   ├── startup.js            # Startup screen logic
│   │   ├── login.js              # Login page logic
│   │   └── dashboard.js          # Dashboard and navigation logic
│   ├── startup.html              # Initial startup screen
│   ├── login.html                # Login page
│   ├── dashboard.html            # Main dashboard
│   └── index.html                # Main application interface
│
├── electron/                     # Electron Desktop Wrapper
│   ├── node_modules/             # Node dependencies (created during setup)
│   ├── assets/
│   │   ├── icon.png              # Application icon
│   │   └── icon.ico              # Windows icon
│   ├── main.js                   # Electron main process
│   └── package.json              # Node.js dependencies
│
├── setup.bat                     # One-time setup script
├── start.bat                     # Application launcher (called by Electron)
├── .gitignore                    # Git ignore rules
├── README.md                     # User documentation
└── PROJECT_STRUCTURE.md          # This file

```

## File Descriptions

### Backend Files

- **main.py**: FastAPI application with all API endpoints
- **database.py**: SQLAlchemy models for Users, Documents, Meetings, Issues, etc.
- **auth.py**: JWT authentication, password hashing, user verification
- **requirements.txt**: All Python packages needed

### Frontend Files

- **startup.html**: First screen with START button
- **login.html**: Login form with Indian theme
- **dashboard.html**: Main interface with all features
- **index.html**: Feature pages container

### Electron Files

- **main.js**: Manages window, starts Ollama and Backend, handles IPC
- **package.json**: Electron and build configuration

### Scripts

- **setup.bat**: Complete installation wizard
- **start.bat**: Launches all services in correct order

## Data Flow

1. User clicks desktop shortcut
2. Electron starts → Shows startup.html
3. User clicks START
4. Electron starts Ollama → Backend → Frontend
5. User logs in → Dashboard loads
6. All API calls go to FastAPI backend
7. Backend uses Ollama for AI features
8. Data stored in SQLite + ChromaDB

## Security

- Passwords hashed with bcrypt
- JWT tokens for authentication
- All data stored locally
- No internet required after setup
- Audit logs for all actions

## Technologies

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Python 3.11, FastAPI, SQLAlchemy
- **Database**: SQLite, ChromaDB
- **AI**: Ollama, Llama3, Nomic Embed Text
- **Desktop**: Electron, Node.js
- **Security**: JWT, bcrypt, passlib
