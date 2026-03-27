# Phase 1 Testing Preparation

**Date:** March 27, 2026  
**Status:** Code pushed to GitHub ✅

---

## What to Delete Before Testing

### ✅ Keep (DO NOT DELETE):
- ✅ **Ollama** - Keep installed (saves 20-30 minutes)
  - Models already downloaded (4.7GB llama3 + 274MB nomic)
  - Just verify: `ollama list` shows both models

### ❌ Delete (Clean System):
1. ❌ **Python** - Uninstall from Settings → Apps
2. ❌ **Node.js** - Uninstall from Settings → Apps
3. ❌ **Project Folder** - Delete `C:\Saransh-Setu\` completely
4. ❌ **Desktop Shortcut** - Delete "Saransh Setu" shortcut
5. ❌ **Database** - Will be deleted with project folder

### 🔄 After Deletion:
1. Restart computer (clears PATH and processes)
2. Verify deletions:
   ```
   python --version    # Should show error
   node --version      # Should show error
   ollama --version    # Should show version (KEEP THIS)
   ```

---

## Phase 1 Testing Steps

### Step 1: Download Fresh Code
1. Go to: https://github.com/AnantShukla-Git-Hub/Saransh-Setu-App
2. Click "Code" → "Download ZIP"
3. Extract to `C:\Saransh-Setu\`

### Step 2: Follow README.md Exactly
- Start from Step 1 (Download) - already done
- Follow Step 2 (Extract) - already done
- Follow Step 3 (Open CMD)
- Follow Step 4 (Install Python 3.11.9)
- Follow Step 5 (Install Node.js)
- **SKIP Step 6** (Ollama already installed)
- **SKIP Step 7** (Models already downloaded)
- Follow Step 8 (Install Packages)
- Follow Step 9 (Create Account)
- Follow Step 10 (Create Shortcut)
- Follow Step 11 (Verification)

### Step 3: Test All Features
- Login
- Dashboard
- Documents (small TXT file)
- Meetings
- Speeches
- Schedule
- Constituency
- AI Query
- Translate
- Audit Logs
- Settings
- Logout

### Step 4: Document Issues
- Note any errors
- Note any confusing steps in README
- Note any missing information
- Note performance issues

---

## Expected Time

### Installation (with Ollama already installed):
- Python: 3-5 minutes
- Node.js: 3-5 minutes
- Packages: 5-10 minutes
- Database + User: 2 minutes
- **Total: ~15-25 minutes**

### Testing:
- Non-AI features: 5-10 minutes
- AI features: 10-20 minutes (slow on 4GB RAM)
- **Total: ~15-30 minutes**

### Grand Total: ~30-55 minutes

---

## What to Check

### ✅ Installation:
- [ ] All commands work
- [ ] No errors during installation
- [ ] README is clear and easy to follow
- [ ] Verification commands all pass

### ✅ App Launch:
- [ ] Desktop shortcut works
- [ ] Services start automatically
- [ ] No errors in CMD window
- [ ] App window opens

### ✅ Login:
- [ ] Login form appears
- [ ] Can enter credentials
- [ ] Login successful
- [ ] Dashboard loads

### ✅ Features:
- [ ] All tabs work
- [ ] No JavaScript errors (F12 console)
- [ ] Forms submit correctly
- [ ] Data displays correctly
- [ ] AI features work (slow but work)

### ✅ Logout:
- [ ] Logout button works
- [ ] Returns to login screen
- [ ] Can login again

### ✅ Close:
- [ ] App closes cleanly
- [ ] CMD windows close automatically
- [ ] No processes left running

---

## Ready to Start Phase 1 Testing! 🚀

**Next Steps:**
1. Delete Python and Node.js
2. Delete project folder
3. Delete desktop shortcut
4. Restart computer
5. Download fresh from GitHub
6. Follow README.md exactly
7. Test as a normal user
8. Document any issues

**Good luck!** 🎯
