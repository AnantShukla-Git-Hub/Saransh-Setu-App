# 🔧 Troubleshooting Guide

This guide helps you fix common problems with Saransh Setu.

---

## 📋 Table of Contents

1. [Installation Problems](#installation-problems)
2. [Setup Script Problems](#setup-script-problems)
3. [Application Won't Start](#application-wont-start)
4. [Login Problems](#login-problems)
5. [Feature Problems](#feature-problems)
6. [Performance Problems](#performance-problems)

---

## 🔴 INSTALLATION PROBLEMS

### Problem 1: "Python is not recognized"

**What this means**: Python is not installed or not added to PATH

**Solution**:
1. Go to: https://www.python.org/downloads/
2. Download Python 3.11
3. Run the installer
4. **⚠️ IMPORTANT**: Check the box "Add Python to PATH"
5. Click "Install Now"
6. After installation, **restart your computer**
7. Test again:
   - Press `Windows Key + R`
   - Type: `cmd` and press Enter
   - Type: `python --version`
   - You should see: `Python 3.11.x`

---

### Problem 2: "Node is not recognized"

**What this means**: Node.js is not installed

**Solution**:
1. Go to: https://nodejs.org/
2. Download the LTS version
3. Run the installer
4. Click through all steps
5. After installation, **restart your computer**
6. Test again:
   - Press `Windows Key + R`
   - Type: `cmd` and press Enter
   - Type: `node --version`
   - You should see: `v20.x.x`

---

### Problem 3: "Ollama is not recognized"

**What this means**: Ollama is not installed

**Solution**:
1. Go to: https://ollama.com/download
2. Download Ollama for Windows
3. Run the installer
4. After installation, **restart your computer**
5. Test again:
   - Press `Windows Key + R`
   - Type: `cmd` and press Enter
   - Type: `ollama --version`
   - You should see version number

---

## 🔴 SETUP SCRIPT PROBLEMS

### Problem 4: Setup.bat won't run

**Solution A - Windows Protection**:
1. When you see "Windows protected your PC"
2. Click "More info"
3. Click "Run anyway"

**Solution B - Run as Administrator**:
1. Right-click on `setup.bat`
2. Click "Run as administrator"
3. Click "Yes" when asked

---

### Problem 5: "Failed to create virtual environment"

**Solution**:
1. Make sure Python is installed correctly
2. Open Command Prompt as Administrator:
   - Press `Windows Key`
   - Type: `cmd`
   - Right-click "Command Prompt"
   - Click "Run as administrator"
3. Navigate to project folder:
   ```
   cd C:\Saransh-Setu\backend
   ```
4. Create virtual environment manually:
   ```
   python -m venv venv
   ```
5. If successful, run setup.bat again

---

### Problem 6: "Failed to install Python dependencies"

**Solution**:
1. Check your internet connection
2. Open Command Prompt as Administrator
3. Navigate to backend folder:
   ```
   cd C:\Saransh-Setu\backend
   ```
4. Activate virtual environment:
   ```
   venv\Scripts\activate.bat
   ```
5. Update pip:
   ```
   python -m pip install --upgrade pip
   ```
6. Install requirements:
   ```
   pip install -r requirements.txt
   ```
7. If any package fails, note the name and install separately:
   ```
   pip install package-name
   ```

---

### Problem 7: AI Model Download Fails

**What this means**: Internet connection issue or Ollama problem

**Solution A - Retry**:
1. When setup asks "Do you want to retry? (Y/N)"
2. Press **Y** and Enter
3. Wait for download to complete

**Solution B - Manual Download**:
1. Open Command Prompt
2. Download Llama3:
   ```
   ollama pull llama3:8b
   ```
   (This takes 10-20 minutes, downloads 4.7GB)
3. Download Nomic Embed:
   ```
   ollama pull nomic-embed-text
   ```
   (This takes 2-3 minutes, downloads 274MB)
4. Verify models are downloaded:
   ```
   ollama list
   ```
   You should see both models listed

**Solution C - Check Ollama Service**:
1. Press `Ctrl + Shift + Esc` (opens Task Manager)
2. Look for "Ollama" in the list
3. If not running, start it:
   - Press `Windows Key + R`
   - Type: `ollama serve`
   - Press Enter
4. Try downloading models again

---

### Problem 8: Desktop Shortcut Not Created

**Solution - Create Manually**:
1. Right-click on Desktop
2. Click "New" → "Shortcut"
3. For location, type:
   ```
   C:\Saransh-Setu\start.bat
   ```
   (Change path if you installed elsewhere)
4. Click "Next"
5. Name it: `Saransh Setu`
6. Click "Finish"

---

## 🔴 APPLICATION WON'T START

### Problem 9: Nothing happens when clicking shortcut

**Solution**:
1. Check if Ollama is installed:
   - Press `Windows Key + R`
   - Type: `cmd`
   - Type: `ollama --version`
2. Check if Python is installed:
   - Type: `python --version`
3. Check if Node.js is installed:
   - Type: `node --version`
4. If any are missing, install them (see Installation Problems above)
5. Restart computer
6. Try again

---

### Problem 10: "Ollama AI Engine: Failed"

**Solution**:
1. Start Ollama manually:
   - Press `Windows Key + R`
   - Type: `cmd`
   - Type: `ollama serve`
   - Keep this window open
2. In another Command Prompt:
   - Navigate to project: `cd C:\Saransh-Setu`
   - Navigate to electron: `cd electron`
   - Start app: `npm start`

---

### Problem 11: "Backend Server: Failed"

**Solution**:
1. Check if port 8000 is already in use
2. Open Command Prompt as Administrator
3. Check what's using port 8000:
   ```
   netstat -ano | findstr :8000
   ```
4. If something is using it, stop that program
5. Or change the port in `backend/.env`:
   - Open `backend/.env` file
   - Change `PORT=8000` to `PORT=8001`
   - Save file
6. Try starting again

---

## 🔴 LOGIN PROBLEMS

### Problem 12: Forgot Username or Password

**Solution**:
1. Open project folder (e.g., `C:\Saransh-Setu`)
2. Go to `backend` folder
3. Find file: `saransh_setu.db`
4. Delete this file
5. Run `setup.bat` again
6. Create new username and password
7. **Write them down this time!**

---

### Problem 13: "Invalid username or password"

**Solution**:
1. Make sure Caps Lock is OFF
2. Check if you're typing correctly
3. Username and password are case-sensitive
4. If still not working, reset (see Problem 12)

---

### Problem 14: Login page won't load

**Solution**:
1. Wait 30 seconds after clicking START
2. Check if backend is running:
   - Open browser
   - Go to: `http://127.0.0.1:8000`
   - You should see: `{"message":"Saransh Setu API"}`
3. If not, restart the application

---

## 🔴 FEATURE PROBLEMS

### Problem 15: Document upload fails

**Solution**:
1. Check file size (should be under 50MB)
2. Check file type (only PDF, DOCX, TXT supported)
3. Make sure file is not corrupted
4. Try a different file

---

### Problem 16: AI Query not responding

**Solution**:
1. Check if Ollama is running:
   - Press `Ctrl + Shift + Esc`
   - Look for "Ollama" process
2. Check if models are downloaded:
   - Press `Windows Key + R`
   - Type: `cmd`
   - Type: `ollama list`
   - You should see llama3:8b and nomic-embed-text
3. If models missing, download them:
   ```
   ollama pull llama3:8b
   ollama pull nomic-embed-text
   ```

---

### Problem 17: Translation not working

**Solution**:
1. Make sure Ollama is running
2. Check if llama3 model is downloaded:
   ```
   ollama list
   ```
3. Try a shorter text (under 500 words)
4. Check internet connection (not needed, but helps diagnose)

---

## 🔴 PERFORMANCE PROBLEMS

### Problem 18: Application is very slow

**Solution**:
1. Check your RAM:
   - Press `Ctrl + Shift + Esc`
   - Look at Memory usage
   - If over 90%, close other programs
2. Check CPU usage:
   - If over 90%, wait for AI processing to complete
3. Restart the application
4. Restart your computer

---

### Problem 19: AI responses take too long

**What this means**: This is normal! AI processing takes time.

**Expected times**:
- Simple query: 5-15 seconds
- Document summary: 30-60 seconds
- Speech generation: 20-40 seconds
- Translation: 10-20 seconds

**If taking longer**:
1. Check CPU usage (should be high during processing)
2. Make sure no other heavy programs are running
3. Try shorter text/documents

---

### Problem 20: Computer freezes when using AI

**Solution**:
1. Your computer might not have enough RAM
2. Close all other programs
3. Try processing smaller documents
4. Consider upgrading RAM to 16GB

---

## 🔴 OTHER PROBLEMS

### Problem 21: Can't find downloaded ZIP file

**Solution**:
1. Open File Explorer
2. Click "Downloads" on the left
3. Look for: `Saransh-Setu-FINAL-PROJECT-main.zip`
4. If not there, download again from GitHub

---

### Problem 22: Antivirus blocking setup.bat

**Solution**:
1. Open your antivirus program
2. Add exception for:
   - `C:\Saransh-Setu\setup.bat`
   - `C:\Saransh-Setu\start.bat`
3. Or temporarily disable antivirus during setup
4. **Remember to enable it again after!**

---

### Problem 23: "Access Denied" errors

**Solution**:
1. Right-click on `setup.bat`
2. Click "Run as administrator"
3. Click "Yes" when asked
4. If still fails, check folder permissions:
   - Right-click project folder
   - Click "Properties"
   - Click "Security" tab
   - Make sure your user has "Full control"

---

## 📞 Still Having Problems?

If none of these solutions work:

1. **Check the README.md** - Make sure you followed all steps
2. **Restart your computer** - Fixes 80% of problems!
3. **Run setup.bat again** - Sometimes a fresh install helps
4. **Check Audit Logs** - Open the app, go to Audit Logs page
5. **Check system requirements**:
   - Windows 10 or 11
   - 8GB RAM minimum (16GB recommended)
   - 10GB free space
   - Python 3.11
   - Node.js v20
   - Ollama installed

---

## 🔍 How to Get Error Details

If you need to report a problem:

1. **For Setup Errors**:
   - Take a photo of the error message
   - Note which step failed

2. **For Application Errors**:
   - Open the app
   - Go to "Audit Logs" page
   - Look for red error messages
   - Note the timestamp and error text

3. **For Command Prompt Errors**:
   - Right-click in the black window
   - Click "Select All"
   - Press Enter to copy
   - Paste into Notepad

---

**🇮🇳 Remember: Most problems are solved by restarting your computer!**