@echo off
:: This script is called by Electron to start services
:: Do not run this manually - use the desktop shortcut instead

cd /d "%~dp0"

:: Start Ollama in background
start /B ollama serve

:: Wait for Ollama to start
timeout /t 3 /nobreak >nul

:: Start Backend
cd backend
start /B cmd /c "call venv\Scripts\activate.bat && python -m uvicorn main:app --host 127.0.0.1 --port 8000"
cd ..

:: Wait for backend to start
timeout /t 5 /nobreak >nul

:: Start Electron
cd electron
call npm start
cd ..
