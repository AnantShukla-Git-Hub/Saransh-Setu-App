const API_BASE_URL = 'http://127.0.0.1:8000';

document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    const loginBtn = document.querySelector('.login-btn');
    
    // Disable button and show loading
    loginBtn.disabled = true;
    loginBtn.innerHTML = '<span class="btn-icon">⏳</span> Logging in...';
    errorMessage.style.display = 'none';
    
    try {
        const formData = new URLSearchParams();
        formData.append('username', username);
        formData.append('password', password);
        
        const response = await fetch(`${API_BASE_URL}/token`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formData
        });
        
        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('access_token', data.access_token);
            localStorage.setItem('username', username);
            window.location.href = 'dashboard.html';
        } else {
            const error = await response.json();
            errorMessage.textContent = error.detail || 'Invalid username or password';
            errorMessage.style.display = 'block';
            loginBtn.disabled = false;
            loginBtn.innerHTML = '<span class="btn-icon">🔒</span> Secure Login';
        }
    } catch (error) {
        console.error('Login error:', error);
        errorMessage.textContent = 'Connection error. Please ensure the backend is running.';
        errorMessage.style.display = 'block';
        loginBtn.disabled = false;
        loginBtn.innerHTML = '<span class="btn-icon">🔒</span> Secure Login';
    }
});
