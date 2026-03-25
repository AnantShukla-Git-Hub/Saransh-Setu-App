# 🧪 Quick Test Guide

**Use this to test the application before pushing to GitHub**

---

## ⚡ FASTEST WAY TO TEST

### 1. Prerequisites Check (2 minutes)
Open CMD and run:
```bash
python --version
node --version
ollama --version
ollama list
```

**Expected Output**:
- Python 3.11.x ✅
- Node v20.x.x ✅
- Ollama version x.x.x ✅
- llama3:8b and nomic-embed-text listed ✅

---

### 2. Run Setup (30-60 minutes first time)
```bash
cd path\to\Saransh-Setu-FINAL-PROJECT
setup.bat
```

**Follow prompts**:
- Press any key to continue through checks
- Wait for installations
- Enter admin username when asked
- Enter admin password when asked
- **WRITE DOWN YOUR CREDENTIALS!**

---

### 3. Start Application (30 seconds)
Double-click "Saransh Setu" on desktop

**OR** manually:
```bash
cd path\to\Saransh-Setu-FINAL-PROJECT
start.bat
```

---

### 4. Quick Feature Test (10 minutes)

#### Test 1: Login
- Enter username
- Enter password
- Click "Secure Login"
- ✅ Should see dashboard

#### Test 2: Document Upload
- Click "Documents" in nav
- Upload a small PDF/TXT file
- Select language
- Click "Upload & Summarize"
- ✅ Should see summary

#### Test 3: AI Query
- Click "AI Query" in nav
- Type: "What is artificial intelligence?"
- Select "General Knowledge"
- Click "Ask AI"
- ✅ Should see answer

#### Test 4: Translation
- Click "Translate" in nav
- Enter text: "Hello, how are you?"
- From: English, To: Hindi
- Click "Translate"
- ✅ Should see Hindi translation

#### Test 5: Theme Toggle
- Click "☀️ Dark" button (top right)
- ✅ Should switch to dark mode
- Click "🌙 Light" button
- ✅ Should switch back

#### Test 6: Logout
- Click "🚪 Logout" button
- ✅ Should redirect to login page

---

## 🐛 COMMON ISSUES & FIXES

### Issue: "Ollama is not running"
**Fix**:
```bash
ollama serve
```
Keep this window open, start app in another window

---

### Issue: "Backend failed to start"
**Fix**:
```bash
cd backend
venv\Scripts\activate
python -m uvicorn main:app --host 127.0.0.1 --port 8000
```

---

### Issue: "Cannot find module"
**Fix**:
```bash
cd backend
venv\Scripts\activate
pip install -r requirements.txt
```

---

### Issue: "Port already in use"
**Fix**:
```bash
netstat -ano | findstr :8000
taskkill /PID <PID_NUMBER> /F
```

---

## ✅ VERIFICATION CHECKLIST

Before pushing to GitHub, verify:

- [ ] setup.bat runs without errors
- [ ] Desktop shortcut created
- [ ] Application starts
- [ ] Login works
- [ ] Dashboard loads
- [ ] At least 3 features tested
- [ ] Theme toggle works
- [ ] Logout works
- [ ] No sensitive data in files (.env, .db)
- [ ] .gitignore is correct

---

## 🚀 READY TO PUSH?

If all checks pass:

1. **Commit everything**:
```bash
git add .
git commit -m "Complete Saransh Setu v1.0.0"
```

2. **Push to GitHub**:
```bash
git push origin main
```

3. **Create Release** on GitHub.com

---

## 📝 TEST NOTES

**Date Tested**: _______________  
**Tested By**: _______________  
**PC Specs**: _______________  
**Issues Found**: _______________  
**Status**: ⬜ Pass / ⬜ Fail  

---

**Happy Testing! 🎉**
