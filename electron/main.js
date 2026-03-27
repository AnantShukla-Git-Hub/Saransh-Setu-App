const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { spawn } = require('child_process');

let mainWindow;
let ollamaProcess;
let backendProcess;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    show: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    },
    icon: path.join(__dirname, 'assets', 'icon.png')
  });

  mainWindow.maximize();
  mainWindow.loadFile(path.join(__dirname, '../backend/app.html'));
  
  // Open DevTools for debugging (comment out for production)
  // mainWindow.webContents.openDevTools();
  
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  mainWindow.on('closed', () => {
    stopAllServices();
    mainWindow = null;
  });
}

function startOllama() {
  return new Promise((resolve, reject) => {
    console.log('Starting Ollama...');
    
    ollamaProcess = spawn('ollama', ['serve'], {
      detached: false,
      stdio: 'pipe'
    });

    let started = false;
    const timeout = setTimeout(() => {
      if (!started) {
        started = true;
        resolve();
      }
    }, 3000);

    ollamaProcess.stdout.on('data', (data) => {
      console.log(`Ollama: ${data}`);
      if (!started && data.toString().includes('Listening')) {
        started = true;
        clearTimeout(timeout);
        resolve();
      }
    });

    ollamaProcess.on('error', (err) => {
      clearTimeout(timeout);
      if (!started) {
        started = true;
        reject(err);
      }
    });
  });
}

function startBackend() {
  return new Promise((resolve, reject) => {
    console.log('Starting Backend...');
    
    const backendPath = path.join(__dirname, '../backend');
    const venvPython = path.join(backendPath, 'venv', 'Scripts', 'python.exe');
    
    backendProcess = spawn(venvPython, ['-m', 'uvicorn', 'main:app', '--host', '127.0.0.1', '--port', '8000'], {
      cwd: backendPath,
      detached: false,
      stdio: 'pipe'
    });

    let started = false;
    const timeout = setTimeout(() => {
      if (!started) {
        started = true;
        resolve();
      }
    }, 5000);

    backendProcess.stdout.on('data', (data) => {
      console.log(`Backend: ${data}`);
      if (!started && data.toString().includes('Uvicorn running')) {
        started = true;
        clearTimeout(timeout);
        resolve();
      }
    });

    backendProcess.on('error', (err) => {
      clearTimeout(timeout);
      if (!started) {
        started = true;
        reject(err);
      }
    });
  });
}

function stopAllServices() {
  console.log('Stopping all services...');
  
  if (backendProcess) {
    backendProcess.kill();
    backendProcess = null;
  }
  
  if (ollamaProcess) {
    ollamaProcess.kill();
    ollamaProcess = null;
  }
}

ipcMain.handle('start-services', async () => {
  try {
    await startOllama();
    await startBackend();
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
});

ipcMain.handle('check-services', async () => {
  const ollamaRunning = ollamaProcess && !ollamaProcess.killed;
  const backendRunning = backendProcess && !backendProcess.killed;
  return { ollama: ollamaRunning, backend: backendRunning };
});

app.whenReady().then(async () => {
  // Start services first
  try {
    await startOllama();
    await startBackend();
  } catch (error) {
    console.error('Failed to start services:', error);
  }
  
  // Then create window
  createWindow();
});

app.on('window-all-closed', () => {
  stopAllServices();
  app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

app.on('before-quit', () => {
  stopAllServices();
});
