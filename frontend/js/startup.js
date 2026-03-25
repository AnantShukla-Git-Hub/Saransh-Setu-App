const { ipcRenderer } = require('electron');

const startBtn = document.getElementById('startBtn');
const statusSection = document.getElementById('statusSection');
const errorSection = document.getElementById('errorSection');
const errorMessage = document.getElementById('errorMessage');
const ollamaStatus = document.getElementById('ollamaStatus');
const backendStatus = document.getElementById('backendStatus');
const appStatus = document.getElementById('appStatus');

startBtn.addEventListener('click', async () => {
    startBtn.disabled = true;
    startBtn.innerHTML = '<span class="btn-icon">⏳</span> Starting Services...';
    statusSection.style.display = 'block';
    errorSection.style.display = 'none';

    try {
        // Update Ollama status
        ollamaStatus.textContent = '🔄 Starting...';
        ollamaStatus.style.color = '#ff9800';

        // Start services
        const result = await ipcRenderer.invoke('start-services');

        if (result.success) {
            ollamaStatus.textContent = '✅ Running';
            ollamaStatus.style.color = '#4caf50';
            
            backendStatus.textContent = '✅ Running';
            backendStatus.style.color = '#4caf50';
            
            appStatus.textContent = '✅ Ready';
            appStatus.style.color = '#4caf50';

            // Wait a moment then load login page
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 1000);
        } else {
            throw new Error(result.error);
        }
    } catch (error) {
        console.error('Startup error:', error);
        ollamaStatus.textContent = '❌ Failed';
        ollamaStatus.style.color = '#f44336';
        backendStatus.textContent = '❌ Failed';
        backendStatus.style.color = '#f44336';
        appStatus.textContent = '❌ Failed';
        appStatus.style.color = '#f44336';

        errorSection.style.display = 'block';
        errorMessage.textContent = `Error: ${error.message}. Please check if Ollama is installed and try again.`;
        
        startBtn.disabled = false;
        startBtn.innerHTML = '<span class="btn-icon">🔄</span> Retry';
    }
});
