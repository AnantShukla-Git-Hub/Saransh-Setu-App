# 🐛 Testing Bugs and Fixes

**Project**: Saransh Setu  
**Purpose**: Track all bugs found during testing and their solutions  
**For**: Future Kiro sessions and debugging

---

## BUG #1: winget command not recognized

**Date**: Testing Phase  
**Reported By**: User  
**Error Message**:
```
'winget' is not recognized as an internal or external command,
operable program or batch file.
```

**Problem**:
- `winget` is Windows Package Manager
- Only available on Windows 10 (version 1809+) and Windows 11
- Older Windows versions don't have it
- Some Windows installations have it disabled

**Solution**:
Create a single `install.bat` file that:
- Downloads all installers using PowerShell
- Installs Python, Node.js, Ollama automatically
- Downloads AI models
- Installs all packages
- Creates user account
- Creates desktop shortcut
- All in one command - user just runs install.bat

**Fix Applied**:
- Created: `install.bat` (complete automated installer)
- Updated: README.md (simplified to 4 steps: download, extract, run install.bat, use app)
- Removed: All manual download steps and winget commands

**Status**: ✅ FIXED

---

## BUG #2: pydantic-core fails to install - Rust compiler error

**Date**: Testing Phase  
**Reported By**: User  
**Error Message**:
```
error: subprocess-exited-with-error
× Preparing metadata (pyproject.toml) did not run successfully.
Cargo, the Rust package manager, is not installed or is not on PATH.
error: metadata-generation-failed
× Encountered error while generating package metadata.
╰─> pydantic-core
```

**Problem**:
- User has Python 3.14.3 (too new - released March 2026)
- pydantic-core 2.14.6 and 2.27.2 both try to build from source
- Needs Rust compiler which is not installed
- Python 3.14 is too new - packages don't have pre-built wheels yet

**Root Cause**:
- App designed and tested for Python 3.11
- Python 3.14 released very recently (March 2026)
- Most packages don't have pre-built binary wheels for Python 3.14 yet
- Building from source requires Rust compiler (not user-friendly)

**Solution**:
- Require Python 3.11 specifically (not 3.12, 3.13, or 3.14)
- Python 3.11 is stable, well-supported, and all packages have pre-built wheels
- Update README to specify Python 3.11.9 exactly
- Add warning if user has wrong Python version

**Fix Applied**:
- Reverted requirements.txt to Python 3.11 compatible versions (tested and working)
- Updated README Step 4 to download Python 3.11.9 specifically
- Added verification step to check Python version
- Added warning in README: "Must use Python 3.11 - newer versions not supported"

**Status**: ✅ FIXED - User must reinstall Python 3.11

**Date**:  
**Reported By**:  
**Error Message**:
```
[paste error here]
```

**Problem**:
[describe what's wrong]

**Solution**:
[describe the fix]

**Fix Applied**:
[what files were changed]

**Status**: [FIXED/IN PROGRESS/PENDING]

---

**End of Bug Tracking Document**
