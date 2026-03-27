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

**Black window opens - keep it open for all steps below!**

---

## 🚀 STEP 4: INSTALL EVERYTHING (Copy-Paste Commands)

### A. Download Python Installer

Copy and paste:
```
powershell -Command "Invoke-WebRequest -Uri 'https://www.python.org/ftp/python/3.11.9/python-3.11.9-amd64.exe' -OutFile '%TEMP%\python-installer.exe'"
```
Press `Enter`

Wait 30 seconds.

### B. Run Python Installer

Copy and paste:
```
%TEMP%\python-installer.exe
```
Press `Enter`

**Installer window opens:**
1. ✅ Check: "Add Python to PATH"
2. Click "Install Now"
3. Wait 2-3 minutes
4. Click "Close"

### C. Download Node.js Installer

Copy and paste:
```
powershell -Command "Invoke-WebRequest -Uri 'https://nodejs.org/dist/v20.11.1/node-v20.11.1-x64.msi' -OutFile '%TEMP%\node-installer.msi'"
```
Press `Enter`

Wait 1 minute.

### D. Run Node.js Installer

Copy and paste:
```
msiexec /i %TEMP%\node-installer.msi
```
Press `Enter`

**Installer window opens:**
1. Click "Next"
2. Click "Next"
3. Click "Next"
4. Click "Install"
5. Click "Yes" if asked
6. Wait 3-5 minutes
7. Click "Finish"

### E. Download Ollama Installer

Copy and paste:
```
powershell -Command "Invoke-WebRequest -Uri 'https://ollama.com/download/OllamaSetup.exe' -OutFile '%TEMP%\ollama-installer.exe'"
```
Press `Enter`

Wait 2 minutes (large file).

### F. Run Ollama Installer

Copy and paste:
```
%TEMP%\ollama-installer.exe
```
Press `Enter`

**Installer window opens:**
1. Click "Install"
2. Click "Yes" if asked
3. Wait 2-3 minutes
4. Closes automatically

### G. Restart CMD

Close CMD:
```
exit
```

Open CMD again:
1. Press `Windows Key + R`
2. Type: `cmd`
3. Press `Enter`

### H. Verify Installations

Copy and paste these one by one:

```
python --version
```
Should show: `Python 3.11.9`

```
node --version
```
Should show: `v20.11.1`

```
npm --version
```
Should show: `10.2.4`

```
ollama --version
```
Should show: `ollama version 0.5.4`

**✅ All show versions? Good! Continue below.**

**❌ Any shows "not recognized"? Restart computer and verify again.**

---

## 🧠 STEP 5: DOWNLOAD AI MODELS (15-30 Minutes)

### A. Download Llama3 (4.7GB)

Copy and paste:
```
ollama pull llama3:8b
```
Press `Enter`

**Wait 10-20 minutes** (progress bar shows).

### B. Download Nomic Embed (274MB)

Copy and paste:
```
ollama pull nomic-embed-text
```
Press `Enter`

**Wait 2-5 minutes**.

### C. Verify Models

Copy and paste:
```
ollama list
```

Should show:
```
llama3:8b              4.7 GB
nomic-embed-text       274 MB
```

**✅ See both? Perfect!**

---

## 📦 STEP 6: INSTALL PACKAGES

### A. Go to App Folder

Copy and paste:
```
cd C:\Saransh-Setu\Saransh-Setu-App-main
```
Press `Enter`

### B. Create Virtual Environment

Copy and paste:
```
python -m venv backend\venv
```
Press `Enter`

Wait 20 seconds.

### C. Activate Virtual Environment

Copy and paste:
```
backend\venv\Scripts\activate
```
Press `Enter`

You'll see `(venv)` at start of line.

### D. Install Python Packages (5-10 Minutes)

Copy and paste:
```
pip install -r backend\requirements.txt
```
Press `Enter`

**Wait 5-10 minutes** (lots of text scrolls).

You'll see: "Successfully installed..."

### E. Install Electron (2-3 Minutes)

Copy and paste:
```
cd electron
```
Press `Enter`

Copy and paste:
```
npm install
```
Press `Enter`

**Wait 2-3 minutes**.

You'll see: "added 123 packages"

Copy and paste:
```
cd ..
```
Press `Enter`

---

## 👤 STEP 7: CREATE YOUR ACCOUNT

### A. Activate Virtual Environment

Copy and paste:
```
backend\venv\Scripts\activate
```
Press `Enter`

### B. Create Database

Copy and paste:
```
python -c "from backend.database import init_db; init_db(); print('Database created!')"
```
Press `Enter`

You'll see: "Database created!"

### C. Create User Account

Copy and paste:
```
python -c "from backend.database import create_user; import getpass; username = input('Enter username: '); password = getpass.getpass('Enter password: '); create_user(username, password); print('User created!')"
```
Press `Enter`

It asks: "Enter username:"
- Type: `admin` (or your choice)
- Press `Enter`

It asks: "Enter password:"
- Type your password (you won't see it)
- Press `Enter`

You'll see: "User created!"

### ✍️ WRITE DOWN:

**Username:** _______________

**Password:** _______________

---

## 🖥️ STEP 8: CREATE DESKTOP SHORTCUT

### A. Create Shortcut

Copy and paste:
```
powershell -Command "$WS = New-Object -ComObject WScript.Shell; $SC = $WS.CreateShortcut('%USERPROFILE%\Desktop\Saransh Setu.lnk'); $SC.TargetPath = 'C:\Saransh-Setu\Saransh-Setu-App-main\start.bat'; $SC.WorkingDirectory = 'C:\Saransh-Setu\Saransh-Setu-App-main'; $SC.Save()"
```
Press `Enter`

**Icon appears on desktop!**

### B. Close CMD

Copy and paste:
```
exit
```
Press `Enter`

---

## ✅ STEP 9: VERIFY EVERYTHING

Open CMD again:
1. Press `Windows Key + R`
2. Type: `cmd`
3. Press `Enter`

Copy and paste these one by one:

```
python --version
```
✅ Should show: `Python 3.11.9`

```
node --version
```
✅ Should show: `v20.11.1`

```
ollama --version
```
✅ Should show: `ollama version 0.5.4`

```
ollama list
```
✅ Should show both models

Close CMD:
```
exit
```

**✅ All checks passed? Installation complete! 🎉**

---

## 🎯 HOW TO USE

### Start:

1. Double-click "Saransh Setu" on desktop
2. Click "▶ Start Application"
3. Wait for 3 green checkmarks (10-15 seconds)
4. Login with username and password
5. Dashboard opens!

### Features:

- **📊 Dashboard** - Overview
- **📄 Documents** - Upload and summarize files
- **💼 Meetings** - Log meetings, get summaries
- **🎤 Speeches** - Generate speeches
- **📅 Schedule** - Manage calendar
- **🏘️ Constituency** - Track issues
- **🤖 AI Query** - Ask AI questions
- **🌐 Translate** - Translate languages
- **📋 Audit Logs** - View all activity
- **⚙️ Settings** - Change settings

### Close:

1. Click "🚪 Logout"
2. Close window

---

## 🌐 Supported Languages

Hindi, Bengali, Tamil, Telugu, Marathi, Gujarati, Kannada, Malayalam, Punjabi, Odia, English

---

## 🆘 PROBLEMS?

**"not recognized" error:**
- Restart computer
- Open CMD and verify again

**Download failed:**
- Check internet connection
- Run the download command again

**Installation failed:**
- Run the install command again

**App won't start:**
- Restart computer
- Double-click desktop icon

**Forgot password:**
- Delete: `C:\Saransh-Setu\Saransh-Setu-App-main\backend\saransh_setu.db`
- Go back to Step 7C

**Other problems:**
- Read: `TROUBLESHOOTING.md`

---

**🇮🇳 Made in India | 100% Offline | Fully Secure**

**सारांश सेतु - Jai Hind!**
