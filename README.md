# 🏛️ Saransh Setu (सारांश सेतु)

**Your Smart AI Helper for Government Work**

100% Offline. Supports 11 Indian Languages.

---

## 📥 STEP 1: DOWNLOAD

Click this link:

## **👉 [CLICK HERE TO DOWNLOAD](https://github.com/AnantShukla-Git-Hub/Saransh-Setu-App/archive/refs/heads/main.zip) 👈**

---

## 📂 STEP 2: EXTRACT

1. Press `Windows Key + E`
2. Click "Downloads"
3. Find: `Saransh-Setu-App-main.zip`
4. Right-click → "Extract All..."
5. Extract to: `C:\Saransh-Setu`

**Folder**: `C:\Saransh-Setu\Saransh-Setu-App-main\`

---

## 💻 STEP 3: OPEN CMD

1. Press `Windows Key + R`
2. Type: `cmd`
3. Press `Enter`

**Black window opens - keep it open!**

---

## 🚀 STEP 4: INSTALL PYTHON

### A. Download Python Installer

```
powershell -Command "Invoke-WebRequest -Uri 'https://www.python.org/ftp/python/3.11.9/python-3.11.9-amd64.exe' -OutFile '%TEMP%\python-installer.exe'"
```
Press `Enter`. Wait 30 seconds.

**Verify Download:**
```
dir %TEMP%\python-installer.exe
```
**Should see**: python-installer.exe (25 MB) ✅

### B. Run Python Installer

```
%TEMP%\python-installer.exe
```
Press `Enter`

**Installer opens:**
1. ✅ Check: "Add Python to PATH"
2. Click "Install Now"
3. Wait 2-3 minutes
4. Click "Close"

### C. Verify Python

**Close CMD:**
```
exit
```

**Open CMD again:** Press `Windows Key + R`, type `cmd`, press `Enter`

**Check version:**
```
python --version
```
**Should see**: `Python 3.11.9` ✅

**Check path:**
```
where python
```
**Should see**: `C:\Users\...\Python\Python311\python.exe` ✅

**✅ Both work? Python installed correctly!**

---

## 🚀 STEP 5: INSTALL NODE.JS

### A. Download Node.js Installer

```
powershell -Command "Invoke-WebRequest -Uri 'https://nodejs.org/dist/v20.11.1/node-v20.11.1-x64.msi' -OutFile '%TEMP%\node-installer.msi'"
```
Press `Enter`. Wait 1 minute.

**Verify Download:**
```
dir %TEMP%\node-installer.msi
```
**Should see**: node-installer.msi (30 MB) ✅

### B. Run Node.js Installer

```
msiexec /i %TEMP%\node-installer.msi
```
Press `Enter`

**Installer opens:**
1. Click "Next"
2. Click "Next"
3. Click "Next"
4. Click "Install"
5. Click "Yes" if asked
6. Wait 3-5 minutes
7. Click "Finish"

### C. Verify Node.js

**Close CMD:**
```
exit
```

**Open CMD again:** Press `Windows Key + R`, type `cmd`, press `Enter`

**Check Node version:**
```
node --version
```
**Should see**: `v20.11.1` ✅

**Check npm version:**
```
npm --version
```
**Should see**: `10.2.4` ✅

**Check Node path:**
```
where node
```
**Should see**: `C:\Program Files\nodejs\node.exe` ✅

**✅ All work? Node.js installed correctly!**

---

## 🚀 STEP 6: INSTALL OLLAMA

### A. Download Ollama Installer

```
powershell -Command "Invoke-WebRequest -Uri 'https://ollama.com/download/OllamaSetup.exe' -OutFile '%TEMP%\ollama-installer.exe'"
```
Press `Enter`. Wait 2 minutes.

**Verify Download:**
```
dir %TEMP%\ollama-installer.exe
```
**Should see**: ollama-installer.exe (500 MB) ✅

### B. Run Ollama Installer

```
%TEMP%\ollama-installer.exe
```
Press `Enter`

**Installer opens:**
1. Click "Install"
2. Click "Yes" if asked
3. Wait 2-3 minutes
4. Closes automatically

### C. Verify Ollama

**Close CMD:**
```
exit
```

**Open CMD again:** Press `Windows Key + R`, type `cmd`, press `Enter`

**Check version:**
```
ollama --version
```
**Should see**: `ollama version 0.5.4` ✅

**Check path:**
```
where ollama
```
**Should see**: `C:\Users\...\AppData\Local\Programs\Ollama\ollama.exe` ✅

**✅ Both work? Ollama installed correctly!**

---

## 🧠 STEP 7: DOWNLOAD AI MODELS (15-30 Minutes)

### A. Download Llama3 (4.7GB)

```
ollama pull llama3:8b
```
Press `Enter`. **Wait 10-20 minutes**.

**What you should see:**
```
pulling manifest
pulling xxxxx... 100%
pulling xxxxx... 100%
success
```

**✅ See "success"? Llama3 downloaded!**

**Verify:**
```
ollama list
```
**Should see**: `llama3:8b  4.7 GB` ✅

### B. Download Nomic Embed (274MB)

```
ollama pull nomic-embed-text
```
Press `Enter`. **Wait 2-5 minutes**.

**What you should see:**
```
pulling manifest
pulling xxxxx... 100%
success
```

**✅ See "success"? Nomic downloaded!**

**Verify:**
```
ollama list
```
**Should see**:
```
llama3:8b              4.7 GB
nomic-embed-text       274 MB
```

**✅ See BOTH? All AI models ready!**

**Test AI:**
```
ollama run llama3:8b "Hello"
```
**Should see**: AI response in English ✅

Type: `/bye` to exit

---

## 📦 STEP 8: INSTALL PACKAGES

### A. Go to App Folder

```
cd C:\Saransh-Setu\Saransh-Setu-App-main
```
Press `Enter`

**Verify:**
```
dir setup.bat
```
**Should see**: setup.bat ✅

### B. Create Virtual Environment

```
python -m venv backend\venv
```
Press `Enter`. Wait 20 seconds.

**Verify:**
```
dir backend\venv\Scripts\activate.bat
```
**Should see**: activate.bat ✅

### C. Activate Virtual Environment

```
backend\venv\Scripts\activate
```
Press `Enter`

**What you should see:**
```
(venv) C:\Saransh-Setu\Saransh-Setu-App-main>
```

**✅ See "(venv)"? Virtual environment active!**

### D. Install Python Packages (5-10 Minutes)

```
pip install -r backend\requirements.txt
```
Press `Enter`. **Wait 5-10 minutes**.

**What you should see:**
```
Successfully installed fastapi uvicorn chromadb...
```

**✅ See "Successfully installed"? Packages installed!**

**Verify:**
```
pip list
```
**Should see**: Long list with fastapi, uvicorn, chromadb, ollama, sqlalchemy ✅

**Verify specific packages:**
```
pip show fastapi
```
**Should see**: Package info for fastapi ✅

### E. Install Electron (2-3 Minutes)

```
cd electron
```
Press `Enter`

**Verify:**
```
dir package.json
```
**Should see**: package.json ✅

```
npm install
```
Press `Enter`. **Wait 2-3 minutes**.

**What you should see:**
```
added 123 packages
```

**✅ See "added packages"? Electron installed!**

**Verify:**
```
npm list electron
```
**Should see**: `electron@XX.X.X` ✅

```
cd ..
```
Press `Enter`

**Verify back in main folder:**
```
dir setup.bat
```
**Should see**: setup.bat ✅

---

## 👤 STEP 9: CREATE YOUR ACCOUNT

### A. Activate Virtual Environment

```
backend\venv\Scripts\activate
```
Press `Enter`

**Should see**: `(venv)` at start ✅

### B. Create Database

```
python -c "from backend.database import init_db; init_db(); print('Database created!')"
```
Press `Enter`

**What you should see:**
```
Database created!
```

**✅ See "Database created!"? Database ready!**

**Verify:**
```
dir backend\saransh_setu.db
```
**Should see**: saransh_setu.db (few KB) ✅

### C. Create User Account

```
python -c "from backend.database import create_user; import getpass; username = input('Enter username: '); password = getpass.getpass('Enter password: '); create_user(username, password); print('User created!')"
```
Press `Enter`

Asks: "Enter username:"
- Type: `admin`
- Press `Enter`

Asks: "Enter password:"
- Type password (won't show)
- Press `Enter`

**What you should see:**
```
User created!
```

**✅ See "User created!"? Account created!**

**Verify:**
```
python -c "from backend.database import SessionLocal, User; db = SessionLocal(); users = db.query(User).all(); print(f'Total users: {len(users)}'); [print(f'Username: {u.username}') for u in users]; db.close()"
```

**Should see**:
```
Total users: 1
Username: admin
```

**✅ See your username? Account saved!**

### ✍️ WRITE DOWN:

**Username:** _______________

**Password:** _______________

---

## 🖥️ STEP 10: CREATE DESKTOP SHORTCUT

```
powershell -Command "$WS = New-Object -ComObject WScript.Shell; $SC = $WS.CreateShortcut('%USERPROFILE%\Desktop\Saransh Setu.lnk'); $SC.TargetPath = 'C:\Saransh-Setu\Saransh-Setu-App-main\start.bat'; $SC.WorkingDirectory = 'C:\Saransh-Setu\Saransh-Setu-App-main'; $SC.Save()"
```
Press `Enter`

**Verify:**
```
dir "%USERPROFILE%\Desktop\Saransh Setu.lnk"
```

**Should see**: Saransh Setu.lnk ✅

**Also check desktop - icon should be there!**

```
exit
```

---

## ✅ STEP 11: FINAL VERIFICATION

Open CMD: Press `Windows Key + R`, type `cmd`, press `Enter`

```
python --version
```
✅ `Python 3.11.9`

```
node --version
```
✅ `v20.11.1`

```
npm --version
```
✅ `10.2.4`

```
ollama --version
```
✅ `ollama version 0.5.4`

```
ollama list
```
✅ Both models listed

```
dir C:\Saransh-Setu\Saransh-Setu-App-main\backend\saransh_setu.db
```
✅ Database file exists

```
dir "%USERPROFILE%\Desktop\Saransh Setu.lnk"
```
✅ Desktop shortcut exists

```
exit
```

**✅ All checks passed? Installation complete! 🎉**

---

## 🎯 HOW TO USE

### Start:

1. Double-click "Saransh Setu" on desktop
2. Click "▶ Start Application"
3. Wait for 3 green checkmarks
4. Login with username and password
5. Dashboard opens!

### Features:

- **📊 Dashboard** - Overview
- **📄 Documents** - Upload and summarize
- **💼 Meetings** - Log and summarize
- **🎤 Speeches** - Generate speeches
- **📅 Schedule** - Manage calendar
- **🏘️ Constituency** - Track issues
- **🤖 AI Query** - Ask questions
- **🌐 Translate** - Translate languages
- **📋 Audit Logs** - View activity
- **⚙️ Settings** - Change settings

### Close:

1. Click "🚪 Logout"
2. Close window

---

## 🌐 Languages

Hindi, Bengali, Tamil, Telugu, Marathi, Gujarati, Kannada, Malayalam, Punjabi, Odia, English

---

## 🆘 PROBLEMS?

**"not recognized":**
- Restart computer
- Verify again

**Download failed:**
- Check internet
- Run command again

**Installation failed:**
- Run install command again

**App won't start:**
- Restart computer
- Try desktop icon

**Forgot password:**
- Delete: `C:\Saransh-Setu\Saransh-Setu-App-main\backend\saransh_setu.db`
- Go back to Step 9C

**Other:**
- Read: `TROUBLESHOOTING.md`

---

**🇮🇳 Made in India | 100% Offline | Fully Secure | Jai Hind!**
