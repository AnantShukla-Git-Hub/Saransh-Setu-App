# 🏛️ Saransh Setu (सारांश सेतु)

**Your Smart AI Helper for Government Work**

This app helps you with documents, meetings, speeches, and more. Works 100% offline. Supports 11 Indian languages.

---

## 📥 STEP 0: DOWNLOAD THE APP

### 🎯 Click this big link to download:

## **� [CLICK HERE TO DOWNLOAD](https://github.com/AnantShukla-Git-Hub/Saransh-Setu-App/archive/refs/heads/main.zip) 👈**

**What happens when you click?**
- A file will download to your computer
- File name: `Saransh-Setu-App-main.zip`
- It goes to your Downloads folder
- Size: Very small (500KB)

**✅ After download, follow the steps below!**

---

## 📋 What You Need Before Starting

- Windows 10 or Windows 11 computer
- 8GB RAM (16GB is better)
- 10GB free space on hard disk
- Internet connection (only for setup)
- 1 hour of time

---

## 🚀 SETUP GUIDE - Follow These Steps

### ⚠️ IMPORTANT RULES:

1. ✅ Do each step in order (don't skip!)
2. ✅ Copy commands exactly (use Ctrl+C to copy)
3. ✅ Wait when it says "wait" (don't close windows!)
4. ✅ Write down your username and password!

---

## 📂 STEP 1: Unzip the Downloaded File

**What is "unzip"?** = Opening a compressed folder to see files inside

1. **Find your Downloads folder**
   - Press `Windows Key + E` (keyboard shortcut)
   - Click "Downloads" on left side

2. **Find the file**: `Saransh-Setu-App-main.zip`
   - It's at the top (newest file)

3. **Right-click on it**
   - A menu appears

4. **Click "Extract All..."**

5. **Click "Browse..." button**
   - Go to `C:\` (your main hard drive)
   - Click "Make New Folder"
   - Type name: `Saransh-Setu`
   - Click "Select Folder"
   - Click "Extract" button

6. **Open the new folder**
   - Go to: `C:\Saransh-Setu\Saransh-Setu-App-main\`
   - You should see folders: `backend`, `frontend`, `electron`
   - You should see files: `setup.bat`, `start.bat`

**✅ Can you see these folders and files? Good! Go to Step 2!**

---

## 💻 STEP 2: Open the Black Window (Command Prompt)

**What is Command Prompt?** = A black window where you type commands to tell computer what to do

### How to open it:

**Easy Way:**
1. Press `Windows Key + R` together
2. A small box appears
3. Type: `cmd`
4. Press `Enter`
5. A black window opens!

**Another Way:**
1. Click Windows Start button (bottom left corner)
2. Type: `cmd`
3. Click "Command Prompt"

**✅ You should see a black window with white text!**

**Keep this window open for all next steps!**

---

## 🐍 STEP 3: Install Python (The Brain)

**What is Python?** = A program that runs the AI brain

### Type this command in the black window:

```
winget install Python.Python.3.11
```

**What to do:**
1. Copy the command above (Ctrl+C)
2. Click in the black window
3. Right-click to paste
4. Press `Enter`
5. It asks: "Do you agree? [Y/N]"
6. Type: `Y`
7. Press `Enter`
8. **Wait 2-3 minutes** (you'll see downloading...)
9. You'll see: "Successfully installed"

### Close and open the black window again:
- Type: `exit` and press `Enter`
- Open CMD again (see Step 2)

### Check if Python is working:

```
python --version
```

**What you should see:**
```
Python 3.11.9
```

**✅ See "Python 3.11"? Great! Go to Step 4!**

**❌ See "not recognized"? Restart your computer and try again!**

---

## 📦 STEP 4: Install Node.js (The Window Maker)

**What is Node.js?** = A program that creates the app window

### Type this command:

```
winget install OpenJS.NodeJS.LTS
```

**What to do:**
1. Copy and paste in black window
2. Press `Enter`
3. Type: `Y` when asked
4. Press `Enter`
5. **Wait 3-5 minutes**
6. You'll see: "Successfully installed"

### Close and open the black window again:
- Type: `exit` and press `Enter`
- Open CMD again

### Check if Node.js is working:

```
node --version
```

**Should see:** `v20.11.0` (or similar)

```
npm --version
```

**Should see:** `10.2.4` (or similar)

**✅ See version numbers? Perfect! Go to Step 5!**

---

## 🤖 STEP 5: Install Ollama (The AI Engine)

**What is Ollama?** = The program that runs AI models

### Type this command:

```
winget install Ollama.Ollama
```

**What to do:**
1. Copy and paste in black window
2. Press `Enter`
3. Type: `Y` when asked
4. Press `Enter`
5. **Wait 2-3 minutes**
6. You'll see: "Successfully installed"

### Close and open the black window again:
- Type: `exit` and press `Enter`
- Open CMD again

### Check if Ollama is working:

```
ollama --version
```

**Should see:** `ollama version 0.5.4` (or similar)

**✅ See version number? Excellent! Go to Step 6!**

---

## 🧠 STEP 6: Download the AI Brain (Takes 15-30 Minutes!)

**What are we downloading?** = The smart AI that understands and answers questions

### ⚠️ THIS IS THE LONGEST STEP - BE PATIENT!

### Download the main AI brain (4.7GB):

```
ollama pull llama3:8b
```

**What to do:**
1. Copy and paste in black window
2. Press `Enter`
3. You'll see a progress bar: `████████░░░░░░░░ 50%`
4. **Wait 10-20 minutes** (depends on internet speed)
5. When done, you'll see: "success"

**☕ Go get some tea/coffee while this downloads!**

### Download the helper AI (274MB):

```
ollama pull nomic-embed-text
```

**What to do:**
1. Copy and paste in black window
2. Press `Enter`
3. **Wait 2-5 minutes**
4. You'll see: "success"

### Check if both AIs are downloaded:

```
ollama list
```

**You should see TWO items:**
```
NAME                    SIZE
llama3:8b              4.7 GB
nomic-embed-text       274 MB
```

**✅ See both? Amazing! Go to Step 7!**

**❌ Download failed? Run the command again - it will continue from where it stopped!**

---

## 📁 STEP 7: Go to the App Folder

**What are we doing?** = Telling the computer where our app is

### Type this command:

```
cd C:\Saransh-Setu\Saransh-Setu-App-main
```

**What to do:**
1. Copy and paste in black window
2. Press `Enter`
3. The text in black window will change

### Check if you're in the right place:

```
dir
```

**You should see these names:**
- backend
- frontend
- electron
- setup.bat
- start.bat

**✅ See these? You're in the right place! Go to Step 8!**

---

## 📚 STEP 8: Install Python Helper Programs

**What are we doing?** = Installing small programs that help Python work

### Command 1: Create a special folder

```
python -m venv backend\venv
```

**What to do:**
1. Copy and paste
2. Press `Enter`
3. **Wait 10-20 seconds**
4. Nothing will show - that's OK!

### Command 2: Turn on the special folder

```
backend\venv\Scripts\activate
```

**What to do:**
1. Copy and paste
2. Press `Enter`
3. You'll see `(venv)` appear at the start of the line

**✅ See (venv)? Good!**

### Command 3: Install all helper programs (5-10 minutes)

```
pip install -r backend\requirements.txt
```

**What to do:**
1. Copy and paste
2. Press `Enter`
3. **Lots of text will scroll - this is normal!**
4. **Wait 5-10 minutes - don't close the window!**
5. When done, you'll see: "Successfully installed..."

**✅ See "Successfully installed"? Great! Go to Step 9!**

---

## 🖥️ STEP 9: Install the Desktop Window Program

**What are we doing?** = Installing the program that creates the app window

### Command 1: Go to electron folder

```
cd electron
```

**What to do:**
1. Copy and paste
2. Press `Enter`

### Command 2: Install Electron (2-3 minutes)

```
npm install
```

**What to do:**
1. Copy and paste
2. Press `Enter`
3. **Wait 2-3 minutes**
4. You'll see: "added 123 packages" (or similar number)

**✅ See "added packages"? Perfect!**

### Command 3: Go back to main folder

```
cd ..
```

**What to do:**
1. Copy and paste
2. Press `Enter`

**✅ Done! Go to Step 10!**

---

## 👤 STEP 10: Create Your Login Account

**What are we doing?** = Making your username and password

### Command 1: Turn on the special folder again

```
backend\venv\Scripts\activate
```

**What to do:**
1. Copy and paste
2. Press `Enter`
3. You should see `(venv)` at the start

### Command 2: Create the database

```
python -c "from backend.database import init_db; init_db(); print('Database created!')"
```

**What to do:**
1. Copy and paste (copy the WHOLE line!)
2. Press `Enter`
3. You'll see: "Database created!"

### Command 3: Create your account

```
python -c "from backend.database import create_user; import getpass; username = input('Enter username: '); password = getpass.getpass('Enter password: '); create_user(username, password); print(f'User {username} created successfully!')"
```

**What to do:**
1. Copy and paste (copy the WHOLE line!)
2. Press `Enter`
3. It asks: **"Enter username:"**
   - Type a username (example: `admin`)
   - Press `Enter`
4. It asks: **"Enter password:"**
   - Type a password (you won't see it typing - this is normal for security!)
   - Press `Enter`
5. You'll see: "User admin created successfully!"

### ✍️ WRITE THESE DOWN ON PAPER RIGHT NOW:

**Username:** _______________

**Password:** _______________

**⚠️ DON'T FORGET THESE! You need them to login!**

**✅ See "created successfully"? Awesome! Go to Step 11!**

---

## 🖱️ STEP 11: Create Desktop Shortcut (Easy Start Button)

**What are we doing?** = Making an icon on desktop to start the app easily

### Follow these clicks:

1. **Go to your Desktop**
   - Minimize all windows
   - Or press `Windows Key + D`

2. **Right-click on empty space**
   - A menu appears

3. **Click "New"**
   - Another menu appears

4. **Click "Shortcut"**
   - A window opens

5. **In the box, paste this**:
   ```
   C:\Saransh-Setu\Saransh-Setu-App-main\start.bat
   ```
   - Right-click in the box and click "Paste"

6. **Click "Next" button**

7. **Type the name**: `Saransh Setu`

8. **Click "Finish" button**

**✅ You should see a new icon on your desktop called "Saransh Setu"!**

---

## ✅ STEP 12: Check Everything is Working

**What are we doing?** = Making sure all programs installed correctly

### Open the black window (CMD) again:
- Press `Windows Key + R`
- Type: `cmd`
- Press `Enter`

### Copy and paste these commands ONE BY ONE:

**1. Check Python:**
```
python --version
```
✅ Should show: `Python 3.11.9`

**2. Check Node:**
```
node --version
```
✅ Should show: `v20.11.0`

**3. Check npm:**
```
npm --version
```
✅ Should show: `10.2.4`

**4. Check Ollama:**
```
ollama --version
```
✅ Should show: `ollama version 0.5.4`

**5. Check AI models:**
```
ollama list
```
✅ Should show TWO models:
- llama3:8b (4.7 GB)
- nomic-embed-text (274 MB)

### Close the black window:
```
exit
```

**✅ All checks passed? 🎉 SETUP COMPLETE! You're ready to use the app!**

**❌ Something failed?**
- Go back to that step
- Do it again
- Or see TROUBLESHOOTING.md file

---

## 🎯 HOW TO USE THE APP

### Starting the App:

**1. Find the icon on your Desktop**
   - Look for: "Saransh Setu" 🏛️

**2. Double-click the icon**
   - A window opens

**3. You'll see:**
   - Orange and green bars (Indian flag colors 🇮🇳)
   - A building icon 🏛️
   - Big orange button: "▶ Start Application"

**4. Click the orange "Start Application" button**

**5. Wait 10-15 seconds**
   - You'll see three things starting:
   - "Ollama AI Engine: Starting..." → turns green ✅
   - "Backend Server: Starting..." → turns green ✅
   - "Application: Loading..." → turns green ✅

**6. Login screen appears!**
   - Type your username
   - Type your password
   - Click "🔒 Secure Login" button

**7. Dashboard opens! 🎉**
   - You're in! Now you can use all features!

---

## 🎨 What Can You Do?

After login, you'll see a blue menu bar at top with these buttons:

### 📊 Dashboard
- See overview of everything
- Quick stats

### 📄 Documents
- Upload PDF or Word files
- Get automatic summary
- Choose language
- Choose summary length (short/medium/long)

### 💼 Meetings
- Write meeting notes
- Get automatic summary
- See action items (things to do)
- View past meetings

### 🎤 Speeches
- Generate speeches automatically
- Choose language
- Choose tone (formal/friendly/inspiring)
- Add key points

### 📅 Schedule
- Add events to calendar
- Set reminders
- See upcoming events
- Mark as done

### 🏘️ Constituency
- Track issues in your area
- Add categories
- Mark status (open/in progress/resolved)
- See statistics

### 🤖 AI Query
- Ask questions to AI
- Get smart answers
- Search your documents
- Works in any language

### 🌐 Translate
- Translate between 11 Indian languages
- Type or paste text
- Get instant translation

### 📋 Audit Logs
- See all activities
- Track what you did
- Filter by date or action

### ⚙️ Settings
- Change theme (light/dark)
- More features coming soon!

**Just click any button to use that feature!**

---

## 🚪 How to Close the App

1. Click "🚪 Logout" button (top right corner)
2. Click the X to close window
3. Everything stops automatically

**Next time, just double-click the desktop icon to start again!**

---

## 🌐 Languages Supported

- 🇮🇳 Hindi (हिंदी)
- 🇮🇳 Bengali (বাংলা)
- 🇮🇳 Tamil (தமிழ்)
- 🇮🇳 Telugu (తెలుగు)
- 🇮🇳 Marathi (मराठी)
- 🇮🇳 Gujarati (ગુજરાતી)
- 🇮🇳 Kannada (ಕನ್ನಡ)
- 🇮🇳 Malayalam (മലയാളം)
- 🇮🇳 Punjabi (ਪੰਜਾਬੀ)
- 🇮🇳 Odia (ଓଡ଼ିଆ)
- 🇬🇧 English

---

## 🔒 Is It Safe?

**YES! Very safe!**

✅ Works 100% offline (no internet needed after setup)
✅ All your data stays on YOUR computer only
✅ Nobody else can see your data
✅ Password is encrypted (scrambled for security)
✅ Logs everything you do (for your records)

**Coming Soon:**
- USB Security Key (extra protection)
- Emergency Kill Switch (instant lockdown)

---

## 🆘 HELP! Something is Not Working!

### Common Problems:

**Problem: "Python is not installed"**
- Go back to Step 3
- Install Python again
- Restart computer

**Problem: "Node.js is not installed"**
- Go back to Step 4
- Install Node.js again
- Restart computer

**Problem: "Ollama is not installed"**
- Go back to Step 5
- Install Ollama again
- Restart computer

**Problem: AI model download failed**
- Check internet connection
- Run the download command again
- It will continue from where it stopped

**Problem: App won't start**
- Restart your computer
- Double-click desktop icon again
- Wait for all three green checkmarks

**Problem: Forgot password**
- Go to: `C:\Saransh-Setu\Saransh-Setu-App-main\backend\`
- Delete file: `saransh_setu.db`
- Go back to Step 10
- Create new username and password

**Problem: Something else**
- Open the file: `TROUBLESHOOTING.md`
- It has solutions for 23 common problems!

---

## 📝 Important Tips

### ✅ DO These Things:
- Remember your username and password
- Use the desktop icon to start
- Wait for green checkmarks before login
- Click Logout before closing

### ❌ DON'T Do These Things:
- Don't delete any files in the app folder
- Don't open the app twice at same time
- Don't share your password
- Don't edit files inside backend or frontend folders

---

## 🎉 That's It!

**You're all set! The app is ready to use!**

**To start using:**
1. Double-click "Saransh Setu" icon on desktop
2. Click "Start Application"
3. Login with your username and password
4. Start using all the features!

---

**🇮🇳 Made in India | 100% Offline | Fully Secure | Jai Hind!**

**सारांश सेतु - Your Smart Government Assistant**

---

## 📞 Need More Help?

- Read: `TROUBLESHOOTING.md` (solutions for common problems)
- Read: `QUICK_TEST_GUIDE.md` (how to test all features)
- Read: `PROJECT_STRUCTURE.md` (how the app is organized)

**Remember: This app works 100% offline after setup. No internet needed!**
