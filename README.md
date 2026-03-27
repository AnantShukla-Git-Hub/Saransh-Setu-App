# 🏛️ Saransh Setu (सारांश सेतु)

**Your Smart AI Helper for Government Work**

100% Offline. Supports 11 Indian Languages. Works on your computer only.

---

## 📥 DOWNLOAD THE APP

### 🎯 Click this link to download:

## **👉 [CLICK HERE TO DOWNLOAD](https://github.com/AnantShukla-Git-Hub/Saransh-Setu-App/archive/refs/heads/main.zip) 👈**

File will download to your Downloads folder.

---

## 🚀 INSTALLATION STEPS

### ⚠️ IMPORTANT:
- Follow steps in order
- Don't skip any step
- Copy commands exactly
- Write down your username and password!

---

## STEP 1: Unzip the File

1. Press `Windows Key + E`
2. Click "Downloads"
3. Find file: `Saransh-Setu-App-main.zip`
4. Right-click on it
5. Click "Extract All..."
6. Click "Browse..."
7. Go to `C:\`
8. Click "Make New Folder"
9. Type: `Saransh-Setu`
10. Click "Select Folder"
11. Click "Extract"

**✅ File extracted to: `C:\Saransh-Setu\Saransh-Setu-App-main\`**

---

## STEP 2: Open Command Prompt

1. Press `Windows Key + R`
2. Type: `cmd`
3. Press `Enter`

**✅ Black window opens**

---

## STEP 3: Install Python

Copy and paste this command:

```
winget install Python.Python.3.11
```

Press `Enter`

Type: `Y`

Press `Enter`

**Wait 2-3 minutes**

You'll see: "Successfully installed"

**Close and reopen CMD:**
- Type: `exit` and press `Enter`
- Press `Windows Key + R`, type `cmd`, press `Enter`

**Verify:**
```
python --version
```

Should show: `Python 3.11.x`

**✅ If yes, continue to Step 4**

---

## STEP 4: Install Node.js

Copy and paste this command:

```
winget install OpenJS.NodeJS.LTS
```

Press `Enter`

Type: `Y`

Press `Enter`

**Wait 3-5 minutes**

You'll see: "Successfully installed"

**Close and reopen CMD:**
- Type: `exit` and press `Enter`
- Press `Windows Key + R`, type `cmd`, press `Enter`

**Verify:**
```
node --version
```

Should show: `v20.x.x`

```
npm --version
```

Should show: `10.x.x`

**✅ If yes, continue to Step 5**

---

## STEP 5: Install Ollama

Copy and paste this command:

```
winget install Ollama.Ollama
```

Press `Enter`

Type: `Y`

Press `Enter`

**Wait 2-3 minutes**

You'll see: "Successfully installed"

**Close and reopen CMD:**
- Type: `exit` and press `Enter`
- Press `Windows Key + R`, type `cmd`, press `Enter`

**Verify:**
```
ollama --version
```

Should show: `ollama version 0.x.x`

**✅ If yes, continue to Step 6**

---

## STEP 6: Download AI Models (Takes 15-30 Minutes!)

### Download Model 1 (4.7GB):

```
ollama pull llama3:8b
```

Press `Enter`

**Wait 10-20 minutes** (progress bar will show)

You'll see: "success"

### Download Model 2 (274MB):

```
ollama pull nomic-embed-text
```

Press `Enter`

**Wait 2-5 minutes**

You'll see: "success"

### Verify both downloaded:

```
ollama list
```

Should show:
```
llama3:8b              4.7 GB
nomic-embed-text       274 MB
```

**✅ If you see both, continue to Step 7**

---

## STEP 7: Go to App Folder

Copy and paste this command:

```
cd C:\Saransh-Setu\Saransh-Setu-App-main
```

Press `Enter`

**Verify:**
```
dir
```

Should show: `backend`, `frontend`, `electron`, `setup.bat`

**✅ If yes, continue to Step 8**

---

## STEP 8: Install Python Packages

### Command 1:

```
python -m venv backend\venv
```

Press `Enter`

**Wait 10-20 seconds**

### Command 2:

```
backend\venv\Scripts\activate
```

Press `Enter`

You'll see `(venv)` at start of line

### Command 3 (Takes 5-10 minutes):

```
pip install -r backend\requirements.txt
```

Press `Enter`

**Wait 5-10 minutes** (lots of text will scroll)

You'll see: "Successfully installed..."

**✅ If yes, continue to Step 9**

---

## STEP 9: Install Electron

### Command 1:

```
cd electron
```

Press `Enter`

### Command 2 (Takes 2-3 minutes):

```
npm install
```

Press `Enter`

**Wait 2-3 minutes**

You'll see: "added 123 packages"

### Command 3:

```
cd ..
```

Press `Enter`

**✅ Continue to Step 10**

---

## STEP 10: Create Your Account

### Command 1:

```
backend\venv\Scripts\activate
```

Press `Enter`

### Command 2:

```
python -c "from backend.database import init_db; init_db(); print('Database created!')"
```

Press `Enter`

You'll see: "Database created!"

### Command 3:

```
python -c "from backend.database import create_user; import getpass; username = input('Enter username: '); password = getpass.getpass('Enter password: '); create_user(username, password); print(f'User {username} created successfully!')"
```

Press `Enter`

It asks: "Enter username:"
- Type your username (example: `admin`)
- Press `Enter`

It asks: "Enter password:"
- Type your password (you won't see it)
- Press `Enter`

You'll see: "User admin created successfully!"

### ✍️ WRITE THESE DOWN:

**Username:** _______________

**Password:** _______________

**✅ Continue to Step 11**

---

## STEP 11: Create Desktop Shortcut

1. Go to Desktop (press `Windows Key + D`)
2. Right-click on empty space
3. Click "New" → "Shortcut"
4. Paste this:
   ```
   C:\Saransh-Setu\Saransh-Setu-App-main\start.bat
   ```
5. Click "Next"
6. Type: `Saransh Setu`
7. Click "Finish"

**✅ Icon appears on desktop**

---

## STEP 12: Verify Everything

Open CMD (press `Windows Key + R`, type `cmd`, press `Enter`)

Copy and paste these commands one by one:

```
python --version
```
Should show: `Python 3.11.x` ✅

```
node --version
```
Should show: `v20.x.x` ✅

```
npm --version
```
Should show: `10.x.x` ✅

```
ollama --version
```
Should show: `ollama version 0.x.x` ✅

```
ollama list
```
Should show both models ✅

Type: `exit` and press `Enter`

**✅ All checks passed? Setup complete! 🎉**

---

## 🎯 HOW TO USE

### Start the App:

1. Double-click "Saransh Setu" icon on desktop
2. Click "▶ Start Application" button
3. Wait for 3 green checkmarks (10-15 seconds)
4. Login with your username and password
5. Dashboard opens!

### Features Available:

Click any button in the blue menu bar:

- **📊 Dashboard** - Overview
- **📄 Documents** - Upload and summarize files
- **💼 Meetings** - Log meetings, get summaries
- **🎤 Speeches** - Generate speeches
- **📅 Schedule** - Manage calendar
- **🏘️ Constituency** - Track issues
- **🤖 AI Query** - Ask questions
- **🌐 Translate** - Translate languages
- **📋 Audit Logs** - View activity
- **⚙️ Settings** - Change settings

### Close the App:

1. Click "🚪 Logout" (top right)
2. Close window (click X)

---

## 🌐 Supported Languages

Hindi, Bengali, Tamil, Telugu, Marathi, Gujarati, Kannada, Malayalam, Punjabi, Odia, English

---

## 🆘 PROBLEMS?

**App won't start:**
- Restart computer
- Try again

**Forgot password:**
- Delete: `C:\Saransh-Setu\Saransh-Setu-App-main\backend\saransh_setu.db`
- Go back to Step 10

**Other problems:**
- Read: `TROUBLESHOOTING.md`

---

## � RULES

### ✅ DO:
- Remember username and password
- Use desktop icon to start
- Wait for green checkmarks
- Click Logout before closing

### ❌ DON'T:
- Don't delete app files
- Don't open app twice
- Don't share password

---

**🇮🇳 Made in India | 100% Offline | Fully Secure**

**सारांश सेतु - Jai Hind!**
