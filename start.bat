@echo off
:: Saransh Setu Launcher
:: This starts the Electron app which manages all services

cd /d "%~dp0"
cd electron
call npm start
