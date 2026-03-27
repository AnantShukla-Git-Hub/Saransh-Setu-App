@echo off
:: Saransh Setu - Desktop Shortcut Creator
:: This creates a desktop shortcut for easy app launch

echo.
echo ========================================
echo Creating Desktop Shortcut...
echo ========================================
echo.

:: Get the current directory (where this batch file is)
set "APP_DIR=%~dp0"

:: Try multiple methods to create shortcut

:: Method 1: Try standard Desktop
set "DESKTOP=%USERPROFILE%\Desktop"
if exist "%DESKTOP%" (
    echo Trying standard Desktop location...
    powershell -Command "$WS = New-Object -ComObject WScript.Shell; $SC = $WS.CreateShortcut('%DESKTOP%\Saransh Setu.lnk'); $SC.TargetPath = '%APP_DIR%start.bat'; $SC.WorkingDirectory = '%APP_DIR%'; $SC.Save()" 2>nul
    if exist "%DESKTOP%\Saransh Setu.lnk" (
        echo.
        echo ========================================
        echo SUCCESS! Shortcut created on Desktop!
        echo ========================================
        echo.
        echo Location: %DESKTOP%
        echo.
        goto :success
    )
)

:: Method 2: Try OneDrive Desktop
set "DESKTOP=%USERPROFILE%\OneDrive\Desktop"
if exist "%DESKTOP%" (
    echo Trying OneDrive Desktop location...
    powershell -Command "$WS = New-Object -ComObject WScript.Shell; $SC = $WS.CreateShortcut('%DESKTOP%\Saransh Setu.lnk'); $SC.TargetPath = '%APP_DIR%start.bat'; $SC.WorkingDirectory = '%APP_DIR%'; $SC.Save()" 2>nul
    if exist "%DESKTOP%\Saransh Setu.lnk" (
        echo.
        echo ========================================
        echo SUCCESS! Shortcut created on Desktop!
        echo ========================================
        echo.
        echo Location: %DESKTOP%
        echo.
        goto :success
    )
)

:: Method 3: Use PowerShell to auto-detect Desktop
echo Trying auto-detect Desktop location...
powershell -Command "$desktopPath = [Environment]::GetFolderPath('Desktop'); $WS = New-Object -ComObject WScript.Shell; $SC = $WS.CreateShortcut(\"$desktopPath\Saransh Setu.lnk\"); $SC.TargetPath = '%APP_DIR%start.bat'; $SC.WorkingDirectory = '%APP_DIR%'; $SC.Save(); Write-Host \"Shortcut created at: $desktopPath\"" 2>nul
if %errorlevel% equ 0 (
    echo.
    echo ========================================
    echo SUCCESS! Shortcut created on Desktop!
    echo ========================================
    echo.
    goto :success
)

:: If all methods failed
echo.
echo ========================================
echo Could not create shortcut automatically
echo ========================================
echo.
echo Please create manually:
echo 1. Right-click on "start.bat" in this folder
echo 2. Select "Send to" -^> "Desktop (create shortcut)"
echo.
pause
exit /b 1

:success
echo Check your Desktop for "Saransh Setu" icon!
echo.
echo To start the app:
echo - Double-click the desktop shortcut
echo.
pause
exit /b 0
