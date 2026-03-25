# 🏛️ Saransh Setu (सारांश सेतु)

**Bridge of Intelligence - Vow of Service**

AI-powered intelligence assistant for Indian Government Officials. 100% offline, fully private, supports 11 Indian languages.

---

## 📥 HOW TO DOWNLOAD THIS PROJECT

### 🔽 CLICK HERE TO DOWNLOAD:

**👉 [DOWNLOAD SARANSH SETU (Click Here)](https://github.com/AnantShukla-Git-Hub/Saransh-Setu-App/archive/refs/heads/main.zip) 👈**

**The ZIP file will download automatically when you click the link above!**

---

### Alternative Method (If link doesn't work):

1. **Scroll to the TOP of this GitHub page** (where you're reading this)

2. **Look for a GREEN button** on the right side that says:
   ```
   <> Code  ▼
   ```
   (It's a bright green button, you can't miss it!)

3. **Click the GREEN "<> Code" button**
   - A small menu will appear

4. **In the menu, click "Download ZIP"**
   - It's at the bottom of the menu
   - The full project will download as a ZIP file

---

### After Download:

5. **The file will download** to your Downloads folder
   - File name: `Saransh-Setu-App-main.zip`
   - Size: About 500KB (small!)

6. **Remember where it downloaded!**
   - Usually: `C:\Users\YourName\Downloads\`

**✅ Once downloaded, go to STEP 1 below to extract and install!**

---

## 📋 What You Need

- **Computer**: Windows 10 or Windows 11
- **RAM**: Minimum 8GB (16GB is better)
- **Storage**: 10GB free space
- **Internet**: Only needed for setup (to download software)
- **Time**: About 1 hour for complete setup

---

## 🚀 COMPLETE SETUP GUIDE (Follow Step by Step)

### ⚠️ VERY IMPORTANT - READ THIS FIRST!

1. **Do this setup only ONCE**
2. **Follow EVERY step in order**
3. **Do NOT skip any step**
4. **Copy commands EXACTLY as written** (use Ctrl+C to copy, right-click in CMD to paste)
5. **Write down your username and password when asked!**

---

## STEP 1: Extract the Downloaded ZIP File

1. **Open your Downloads folder**
   - Press `Windows Key + E` (opens File Explorer)
   - Click "Downloads" on the left side

2. **Find the file** named `Saransh-Setu-App-main.zip`
   - It should be at the top (most recent file)

3. **Right-click on the ZIP file**

4. **Click "Extract All..."**

5. **Choose where to save** (we recommend):
   - Click "Browse..."
   - Navigate to `C:\`
   - Click "Make New Folder"
   - Name it: `Saransh-Setu`
   - Click "Select Folder"
   - Click "Extract"

6. **Open the extracted folder**
   - Go to: `C:\Saransh-Setu\Saransh-Setu-App-main\`
   - You should see folders named: `backend`, `frontend`, `electron`
   - You should see files named: `setup.bat`, `README.md`, `start.bat`

**✅ CHECKPOINT:** If you see these folders and files, you're ready for Step 2!

---

## STEP 2: Open Command Prompt (CMD)

### How to Open CMD:

**Method 1 (Easiest):**
1. Press `Windows Key + R` on your keyboard
2. Type: `cmd`
3. Press `Enter`
4. A black window will open - this is Command Prompt

**Method 2:**
1. Click the Windows Start button (bottom left)
2. Type: `cmd`
3. Click on "Command Prompt"

**✅ You should see a black window with white text!**

---

## STEP 3: Install Python Using CMD

### Copy and paste these commands one by one:

1. **In the CMD window, type this command** (or copy and paste):
   ```
   winget install Python.Python.3.11
   ```
   - Press `Enter`
   - You'll see: "Do you agree to the source agreements terms? [Y/N]"
   - Type: `Y` and press `Enter`
   - Wait 2-3 minutes for installation
   - You'll see "Successfully installed"

2. **Close and reopen CMD** (important for Python to work):
   - Type: `exit` and press `Enter`
   - Open CMD again (see STEP 2)

3. **Verify Python is installed**:
   ```
   python --version
   ```
   - Press `Enter`
   - You should see: `Python 3.11.x`

**✅ If you see Python version = SUCCESS!**

**❌ If you see "not recognized":**
- Restart your computer
- Open CMD again
- Try the verify command again

---

## STEP 4: Install Node.js Using CMD

### Copy and paste this command:

1. **In CMD, type**:
   ```
   winget install OpenJS.NodeJS.LTS
   ```
   - Press `Enter`
   - Type: `Y` when asked to agree
   - Wait 3-5 minutes for installation
   - You'll see "Successfully installed"

2. **Close and reopen CMD**:
   - Type: `exit` and press `Enter`
   - Open CMD again

3. **Verify Node.js is installed**:
   ```
   node --version
   ```
   - Press `Enter`
   - You should see: `v20.x.x` or `v18.x.x`

4. **Also verify npm**:
   ```
   npm --version
   ```
   - Press `Enter`
   - You should see: `10.x.x` or similar

**✅ If you see both version numbers = SUCCESS!**

---

## STEP 5: Install Ollama Using CMD

### Copy and paste this command:

1. **In CMD, type**:
   ```
   winget install Ollama.Ollama
   ```
   - Press `Enter`
   - Type: `Y` when asked to agree
   - Wait 2-3 minutes for installation
   - You'll see "Successfully installed"

2. **Close and reopen CMD**:
   - Type: `exit` and press `Enter`
   - Open CMD again

3. **Verify Ollama is installed**:
   ```
   ollama --version
   ```
   - Press `Enter`
   - You should see: `ollama version 0.x.x`

**✅ If you see version number = SUCCESS!**

---

## STEP 6: Download AI Models Using CMD

### These are the AI brains - this will take 10-30 minutes!

1. **Make sure CMD is open**

2. **Download Llama3 model** (about 4.7GB):
   ```
   ollama pull llama3:8b
   ```
   - Press `Enter`
   - You'll see a progress bar downloading
   - **This takes 10-20 minutes** depending on internet speed
   - Wait until you see "success"

3. **Download Embedding model** (about 274MB):
   ```
   ollama pull nomic-embed-text
   ```
   - Press `Enter`
   - You'll see a progress bar
   - **This takes 2-5 minutes**
   - Wait until you see "success"

4. **Verify both models are downloaded**:
   ```
   ollama list
   ```
   - Press `Enter`
   - You should see:
   ```
   NAME                    ID              SIZE
   llama3:8b              xxxxx           4.7 GB
   nomic-embed-text       xxxxx           274 MB
   ```

**✅ If you see both models listed = SUCCESS!**

**❌ If download fails:**
- Check your internet connection
- Run the pull command again
- It will resume from where it stopped

---

## STEP 7: Navigate to Project Folder in CMD

### Go to where you extracted the project:

1. **In CMD, type this command** (adjust path if you extracted elsewhere):
   ```
   cd C:\Saransh-Setu\Saransh-Setu-App-main
   ```
   - Press `Enter`
   - The path in CMD should change to show your project folder

2. **Verify you're in the right folder**:
   ```
   dir
   ```
   - Press `Enter`
   - You should see: `backend`, `frontend`, `electron`, `setup.bat`

**✅ If you see these folders = You're in the right place!**

---

## STEP 8: Install Python Packages Using CMD

### Install all required Python libraries:

1. **Create a virtual environment**:
   ```
   python -m venv backend\venv
   ```
   - Press `Enter`
   - Wait 10-20 seconds
   - No output means success

2. **Activate the virtual environment**:
   ```
   backend\venv\Scripts\activate
   ```
   - Press `Enter`
   - You should see `(venv)` appear at the start of your CMD line

3. **Install all Python packages** (this takes 5-10 minutes):
   ```
   pip install -r backend\requirements.txt
   ```
   - Press `Enter`
   - You'll see lots of text scrolling
   - **Wait patiently - don't close CMD!**
   - When done, you'll see "Successfully installed..."

**✅ If you see "Successfully installed" = SUCCESS!**

---

## STEP 9: Install Electron (Desktop App) Using CMD

### Install Node.js packages:

1. **Navigate to electron folder**:
   ```
   cd electron
   ```
   - Press `Enter`

2. **Install Electron and dependencies** (takes 2-3 minutes):
   ```
   npm install
   ```
   - Press `Enter`
   - You'll see progress bars
   - Wait until you see "added XXX packages"

3. **Go back to main folder**:
   ```
   cd ..
   ```
   - Press `Enter`

**✅ If you see "added packages" = SUCCESS!**

---

## STEP 10: Create Admin Account Using CMD

### Set up your login credentials:

1. **Make sure you're in the main project folder**
   - Your CMD should show: `C:\Saransh-Setu\Saransh-Setu-App-main`

2. **Activate virtual environment** (if not already active):
   ```
   backend\venv\Scripts\activate
   ```
   - Press `Enter`

3. **Run the database setup script**:
   ```
   python -c "from backend.database import init_db; init_db(); print('Database created!')"
   ```
   - Press `Enter`
   - You should see: "Database created!"

4. **Create your admin account**:
   ```
   python -c "from backend.database import create_user; import getpass; username = input('Enter username: '); password = getpass.getpass('Enter password: '); create_user(username, password); print(f'User {username} created successfully!')"
   ```
   - Press `Enter`
   - It will ask: **"Enter username:"**
     - Type your username (example: `admin`)
     - Press `Enter`
   - It will ask: **"Enter password:"**
     - Type your password (you won't see it - this is normal)
     - Press `Enter`
   - You should see: "User admin created successfully!"

**✍️ WRITE THESE DOWN RIGHT NOW:**
- Username: _______________
- Password: _______________

**✅ If you see "created successfully" = SUCCESS!**

---

## STEP 11: Create Desktop Shortcut

### Make it easy to start the app:

1. **Right-click on your Desktop**
2. **Click "New" → "Shortcut"**
3. **In "Type the location", paste this** (adjust path if needed):
   ```
   C:\Saransh-Setu\Saransh-Setu-App-main\start.bat
   ```
4. **Click "Next"**
5. **Name it**: `Saransh Setu`
6. **Click "Finish"**

**✅ You should see a "Saransh Setu" icon on your desktop!**

---

## STEP 12: Final Verification - Check Everything Works

### Let's make sure all installations were successful:

1. **Make sure CMD is still open**
   - If you closed it, open CMD again (see STEP 2)

2. **Copy and paste these commands one by one to verify**:

**Check Python:**
```
python --version
```
- Should show: `Python 3.11.x` ✅

**Check Node.js:**
```
node --version
```
- Should show: `v20.x.x` or `v18.x.x` ✅

**Check npm:**
```
npm --version
```
- Should show: `10.x.x` ✅

**Check Ollama:**
```
ollama --version
```
- Should show: `ollama version 0.x.x` ✅

**Check AI Models:**
```
ollama list
```
- Should show:
```
NAME                    ID              SIZE
llama3:8b              xxxxx           4.7 GB
nomic-embed-text       xxxxx           274 MB
```
✅ Both models must be listed!

**Check Python packages:**
```
cd C:\Saransh-Setu\Saransh-Setu-App-main
backend\venv\Scripts\activate
pip list
```
- Should show a long list of packages including: fastapi, uvicorn, chromadb, ollama, etc. ✅

3. **Type**: `exit` and press Enter to close CMD

**✅ If all checks pass = 🎉 PERFECT! Setup is 100% complete!**

**❌ If any check fails:**
- Go back to that specific step
- Reinstall that component
- Run the verification again

---

## 🎯 HOW TO USE SARANSH SETU

### Starting the Application:

1. **Look at your Desktop**
   - You should see an icon: **"Saransh Setu"** 🏛️

2. **Double-click the icon**

3. **A window will open** with:
   - Orange and green bars at top (Indian flag colors)
   - A building icon 🏛️
   - Text: "Saransh Setu"
   - A big orange button: **"▶ Start Application"**

4. **Click the "Start Application" button**

5. **Wait 10-15 seconds** while it starts:
   - You'll see: "Ollama AI Engine: Starting..."
   - Then: "Backend Server: Starting..."
   - Then: "Application: Loading..."
   - All will turn green ✅

6. **Login page will appear**:
   - Enter your **username**
   - Enter your **password**
   - Click **"🔒 Secure Login"**

7. **Dashboard will open!** 🎉

### Using the Features:

After login, you'll see a blue navigation bar with:

- **📊 Dashboard** - Home page with overview
- **📄 Documents** - Upload and summarize PDF/Word files
- **💼 Meetings** - Log meeting notes and get summaries
- **🎤 Speeches** - Generate speeches in any Indian language
- **📅 Schedule** - Manage your calendar
- **🏘️ Constituency** - Track issues in your area
- **🤖 AI Query** - Ask questions to the AI assistant
- **🌐 Translate** - Translate between 11 Indian languages
- **📋 Audit Logs** - See all activities
- **⚙️ Settings** - Change password, manage users

**Click any menu item** to use that feature!

### Closing the Application:

1. **Click the "🚪 Logout" button** (top right corner)
2. **Close the window** (click the X)
3. Everything stops automatically

---

## ✨ FEATURES

### 🌐 Supported Languages:
- Hindi (हिंदी)
- Bengali (বাংলা)
- Tamil (தமிழ்)
- Telugu (తెలుగు)
- Marathi (मराठी)
- Gujarati (ગુજરાતી)
- Kannada (ಕನ್ನಡ)
- Malayalam (മലയാളം)
- Punjabi (ਪੰਜਾਬੀ)
- Odia (ଓଡ଼ିଆ)
- English

### 🔒 Security:
- ✅ 100% Offline (no internet needed after setup)
- ✅ All data stays on your computer
- ✅ Encrypted passwords
- ✅ Activity logs for everything
- 🔜 USB Security Key (Coming Soon)
- 🔜 Emergency Kill Switch (Coming Soon)

### 🎨 Interface:
- Light/Dark theme (click ☀️ Dark button to switch)
- Indian government colors (orange, white, green)
- Easy to use buttons and menus

---

## 🆘 TROUBLESHOOTING

**See detailed solutions in [TROUBLESHOOTING.md](TROUBLESHOOTING.md)**

### Quick Fixes:

**Problem: Setup says "Python is not installed"**
- Go back to STEP 2 and install Python
- Make sure you checked "Add Python to PATH"
- Restart computer and try again

**Problem: Setup says "Node.js is not installed"**
- Go back to STEP 3 and install Node.js
- Restart computer and try again

**Problem: Setup says "Ollama is not installed"**
- Go back to STEP 4 and install Ollama
- Restart computer and try again

**Problem: AI model download fails**
- Check your internet connection
- Press Y to retry when asked
- Or download manually (see TROUBLESHOOTING.md)

**Problem: Application won't start**
- Make sure setup completed successfully
- Restart your computer
- Try double-clicking the desktop icon again

**Problem: Forgot password**
- Open project folder
- Delete file: `backend\saransh_setu.db`
- Run `setup.bat` again
- Create new username and password

---

## 📝 IMPORTANT RULES

### ✅ DO:
- Keep your username and password safe
- Use the desktop shortcut to start
- Wait for all services to start (green checkmarks)
- Close properly using Logout button

### ❌ DON'T:
- Don't delete any project files
- Don't run the app twice at same time
- Don't edit database files
- Don't share your password

---

## 📞 NEED HELP?

1. Read the TROUBLESHOOTING.md file
2. Check if you followed all steps
3. Verify all software is installed (STEP 6)
4. Check Audit Logs in the application

---

**🇮🇳 Jai Hind! | Made in India | 100% Offline | Fully Secure**

**सारांश सेतु - Bridge of Intelligence, Vow of Service**
