@echo off
cls
color 0A
echo ========================================
echo    SARANSH SETU - ONE-TIME SETUP
echo    सारांश सेतु - प्रारंभिक सेटअप
echo ========================================
echo.
echo This will install all required components.
echo Please follow each step carefully.
echo.
echo IMPORTANT: Make sure you have installed:
echo  - Python 3.11
echo  - Node.js
echo  - Ollama
echo.
echo If not installed, press Ctrl+C to cancel
echo and install them first (see README.md)
echo.
pause

:: Check if running in correct directory
if not exist "backend" (
    color 0C
    echo.
    echo ========================================
    echo ERROR: Wrong Directory!
    echo ========================================
    echo.
    echo Please run this script from the project root directory!
    echo Example: C:\Saransh-Setu\
    echo.
    echo Current directory: %CD%
    echo.
    pause
    exit /b 1
)

color 0A

echo.
echo ========================================
echo STEP 1: Checking Python Installation
echo ========================================
echo.
python --version >nul 2>&1
if errorlevel 1 (
    color 0C
    echo ========================================
    echo ERROR: Python is NOT installed!
    echo ========================================
    echo.
    echo Please install Python 3.11:
    echo 1. Visit: https://www.python.org/downloads/
    echo 2. Download Python 3.11
    echo 3. Run installer
    echo 4. CHECK the box: "Add Python to PATH"
    echo 5. Click "Install Now"
    echo 6. Restart computer
    echo 7. Run this setup again
    echo.
    pause
    exit /b 1
)

color 0A
echo ✓ Python is installed!
echo.
python --version
echo.
echo ========================================
echo VERIFICATION COMMAND:
echo ========================================
echo Copy this command to verify later:
echo.
echo   python --version
echo.
echo You should see: Python 3.11.x
echo ========================================
echo.
pause

echo.
echo ========================================
echo STEP 2: Checking Node.js Installation
echo ========================================
echo.
node --version >nul 2>&1
if errorlevel 1 (
    color 0C
    echo ========================================
    echo ERROR: Node.js is NOT installed!
    echo ========================================
    echo.
    echo Please install Node.js:
    echo 1. Visit: https://nodejs.org/
    echo 2. Download LTS version
    echo 3. Run installer
    echo 4. Click through all steps
    echo 5. Restart computer
    echo 6. Run this setup again
    echo.
    pause
    exit /b 1
)

color 0A
echo ✓ Node.js is installed!
echo.
node --version
npm --version
echo.
echo ========================================
echo VERIFICATION COMMANDS:
echo ========================================
echo Copy these commands to verify later:
echo.
echo   node --version
echo   npm --version
echo.
echo You should see version numbers
echo ========================================
echo.
pause

echo.
echo ========================================
echo STEP 3: Creating Python Virtual Environment
echo ========================================
cd backend
if exist "venv" (
    echo Virtual environment already exists. Skipping...
) else (
    echo Creating virtual environment...
    python -m venv venv
    if errorlevel 1 (
        echo ERROR: Failed to create virtual environment!
        pause
        exit /b 1
    )
    echo Virtual environment created successfully!
)
cd ..
pause

echo.
echo ========================================
echo STEP 4: Installing Python Dependencies
echo ========================================
echo This may take 5-10 minutes...
cd backend
call venv\Scripts\activate.bat
pip install --upgrade pip
pip install -r requirements.txt
if errorlevel 1 (
    echo ERROR: Failed to install Python dependencies!
    pause
    exit /b 1
)
echo Python dependencies installed successfully!
cd ..
pause

echo.
echo ========================================
echo STEP 5: Installing Electron Dependencies
echo ========================================
cd electron
if exist "node_modules" (
    echo Node modules already installed. Skipping...
) else (
    echo Installing Electron...
    call npm install
    if errorlevel 1 (
        echo ERROR: Failed to install Electron!
        pause
        exit /b 1
    )
)
cd ..
echo Electron installed successfully!
pause

echo.
echo ========================================
echo STEP 6: Checking Ollama Installation
echo ========================================
ollama --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Ollama is not installed!
    echo.
    echo Please install Ollama:
    echo 1. Visit: https://ollama.com/download
    echo 2. Download and install Ollama for Windows
    echo 3. Run this setup script again
    pause
    exit /b 1
)

echo Ollama is installed!
ollama --version
pause

echo.
echo ========================================
echo STEP 7: Downloading AI Models
echo ========================================
echo This will download approximately 5GB of data.
echo It may take 10-30 minutes depending on your internet speed.
echo.
pause

:RETRY_LLAMA3
echo Downloading Llama3 model...
ollama pull llama3:8b
if errorlevel 1 (
    echo.
    echo ERROR: Failed to download Llama3 model!
    echo.
    choice /C YN /M "Do you want to retry"
    if errorlevel 2 goto SKIP_LLAMA3
    if errorlevel 1 goto RETRY_LLAMA3
)
echo Llama3 model downloaded successfully!
:SKIP_LLAMA3

:RETRY_NOMIC
echo Downloading Nomic Embed Text model...
ollama pull nomic-embed-text
if errorlevel 1 (
    echo.
    echo ERROR: Failed to download Nomic Embed Text model!
    echo.
    choice /C YN /M "Do you want to retry"
    if errorlevel 2 goto SKIP_NOMIC
    if errorlevel 1 goto RETRY_NOMIC
)
echo Nomic Embed Text model downloaded successfully!
:SKIP_NOMIC

pause

echo.
echo ========================================
echo STEP 8: Creating Admin Account
echo ========================================
echo.
set /p ADMIN_USER="Enter admin username: "
set /p ADMIN_PASS="Enter admin password: "
echo.
echo IMPORTANT: Please remember these credentials!
echo Username: %ADMIN_USER%
echo Password: [HIDDEN]
echo.
echo Write these down in a safe place!
pause

:: Create .env file with credentials
cd backend
(
echo SECRET_KEY=%RANDOM%%RANDOM%%RANDOM%%RANDOM%
echo ALGORITHM=HS256
echo ACCESS_TOKEN_EXPIRE_MINUTES=43200
echo DATABASE_URL=sqlite:///./saransh_setu.db
echo OLLAMA_BASE_URL=http://localhost:11434
echo OLLAMA_MODEL=llama3:8b
echo OLLAMA_EMBED_MODEL=nomic-embed-text
echo HOST=127.0.0.1
echo PORT=8000
echo CHROMA_PERSIST_DIRECTORY=./chroma_data
echo ADMIN_USERNAME=%ADMIN_USER%
echo ADMIN_PASSWORD=%ADMIN_PASS%
) > .env

echo Environment file created!
cd ..
pause

echo.
echo ========================================
echo STEP 9: Initializing Database
echo ========================================
cd backend
call venv\Scripts\activate.bat
python -c "from database import init_db; from auth import get_password_hash; from database import SessionLocal, User; import os; init_db(); db = SessionLocal(); admin = User(username=os.getenv('ADMIN_USERNAME', 'admin'), full_name='System Administrator', hashed_password=get_password_hash(os.getenv('ADMIN_PASSWORD', 'admin'))); db.add(admin); db.commit(); print('Database initialized and admin user created!')"
cd ..
pause

echo.
echo ========================================
echo STEP 10: Creating Desktop Shortcut
echo ========================================
echo Creating shortcut...
powershell -Command "$WshShell = New-Object -ComObject WScript.Shell; $Shortcut = $WshShell.CreateShortcut('%USERPROFILE%\Desktop\Saransh Setu.lnk'); $Shortcut.TargetPath = '%CD%\start.bat'; $Shortcut.WorkingDirectory = '%CD%'; $Shortcut.IconLocation = '%CD%\electron\assets\icon.ico'; $Shortcut.Description = 'Saransh Setu - AI Assistant'; $Shortcut.Save()"
echo Desktop shortcut created!
pause

echo.
echo ========================================
echo FINAL VERIFICATION
echo ========================================
echo.
echo Please run these commands to verify installation:
echo.
echo 1. Check Python:
echo    python --version
echo.
echo 2. Check Node.js:
echo    node --version
echo.
echo 3. Check Ollama:
echo    ollama --version
echo.
echo 4. List Ollama models:
echo    ollama list
echo.
echo You should see llama3:8b and nomic-embed-text in the list.
echo.
pause

echo.
echo ========================================
echo SETUP COMPLETE!
echo ========================================
echo.
echo Installation successful!
echo.
echo To start Saransh Setu:
echo 1. Double-click "Saransh Setu" icon on your desktop
echo 2. Click the START button
echo 3. Login with your credentials
echo.
echo Your credentials:
echo Username: %ADMIN_USER%
echo Password: [Please refer to your notes]
echo.
echo IMPORTANT: Keep your credentials safe!
echo.
pause
