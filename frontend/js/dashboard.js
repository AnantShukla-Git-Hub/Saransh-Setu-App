const API_BASE_URL = window.API_BASE_URL || 'http://127.0.0.1:8000';
window.API_BASE_URL = API_BASE_URL; // Share with dynamically loaded scripts

let currentUser = null;

// Check authentication
function checkAuth() {
    const token = localStorage.getItem('access_token');
    if (!token) {
        window.location.href = 'login.html';
        return false;
    }
    return true;
}

// Initialize dashboard
async function initDashboard() {
    if (!checkAuth()) return;
    
    const username = localStorage.getItem('username');
    document.getElementById('userName').textContent = username || 'Admin';
    
    updateDateTime();
    setInterval(updateDateTime, 1000);
    
    setupThemeToggle();
    setupNavigation();
    setupLogout();
    loadDashboardData();
}

function updateDateTime() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    const dateTimeStr = now.toLocaleDateString('en-IN', options);
    const elem = document.getElementById('currentDateTime');
    if (elem) {
        elem.textContent = `📅 ${dateTimeStr}`;
    }
}

function setupThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    updateThemeButton(currentTheme);
    
    themeToggle.addEventListener('click', () => {
        const theme = document.documentElement.getAttribute('data-theme');
        const newTheme = theme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeButton(newTheme);
    });
}

function updateThemeButton(theme) {
    const btn = document.getElementById('themeToggle');
    if (theme === 'dark') {
        btn.innerHTML = '<span class="theme-icon">🌙</span> Light';
    } else {
        btn.innerHTML = '<span class="theme-icon">☀️</span> Dark';
    }
}

function setupNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const page = item.getAttribute('href').substring(1);
            navigateToPage(page);
            
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
        });
    });
}

async function navigateToPage(page) {
    const pages = document.querySelectorAll('.page-content');
    pages.forEach(p => p.classList.remove('active'));
    
    const targetPage = document.getElementById(`${page}Page`);
    if (targetPage) {
        try {
            const response = await fetch(`pages/${page}.html`);
            if (response.ok) {
                const html = await response.text();
                targetPage.innerHTML = html;
                targetPage.classList.add('active');
                
                // Load corresponding JS file
                const existingScript = document.querySelector(`script[src="js/${page}.js"]`);
                if (existingScript) {
                    existingScript.remove();
                }
                
                const script = document.createElement('script');
                script.src = `js/${page}.js`;
                document.body.appendChild(script);
            }
        } catch (error) {
            console.error(`Error loading ${page}:`, error);
            targetPage.innerHTML = '<div class="empty-state"><div class="empty-state-icon">❌</div><p>Failed to load page</p></div>';
            targetPage.classList.add('active');
        }
    }
}

function setupLogout() {
    document.getElementById('logoutBtn').addEventListener('click', () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('username');
        window.location.href = 'login.html';
    });
}

async function loadDashboardData() {
    try {
        const token = localStorage.getItem('access_token');
        const response = await fetch(`${API_BASE_URL}/dashboard/stats`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        
        if (response.ok) {
            const data = await response.json();
            updateStats(data);
        }
    } catch (error) {
        console.error('Error loading dashboard data:', error);
    }
}

function updateStats(data) {
    const docCount = document.getElementById('docCount');
    const meetingCount = document.getElementById('meetingCount');
    const issueCount = document.getElementById('issueCount');
    const scheduleCount = document.getElementById('scheduleCount');
    const speechCount = document.getElementById('speechCount');
    const auditCount = document.getElementById('auditCount');
    
    if (docCount) docCount.textContent = data.documents || 0;
    if (meetingCount) meetingCount.textContent = data.meetings || 0;
    if (issueCount) issueCount.textContent = data.issues || 0;
    if (scheduleCount) scheduleCount.textContent = data.schedules || 0;
    if (speechCount) speechCount.textContent = data.speeches || 0;
    if (auditCount) auditCount.textContent = data.audit_logs || 0;
}

// Initialize on load
document.addEventListener('DOMContentLoaded', initDashboard);
