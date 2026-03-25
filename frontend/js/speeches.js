const API_BASE_URL = 'http://127.0.0.1:8000';

document.querySelectorAll('.lang-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.lang-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById('speechLanguage').value = tab.dataset.lang;
    });
});

document.getElementById('speechForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const progress = document.getElementById('speechProgress');
    const output = document.getElementById('speechOutput');
    
    progress.style.display = 'block';
    output.innerHTML = '<div class="empty-state"><div class="empty-state-icon">⏳</div><p>Generating speech...</p></div>';
    
    const keyPoints = document.getElementById('speechKeyPoints').value.split('\n').filter(p => p.trim());
    
    try {
        const token = localStorage.getItem('access_token');
        const response = await fetch(`${API_BASE_URL}/speeches/generate`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: document.getElementById('speechTitle').value,
                occasion: document.getElementById('speechOccasion').value,
                context: document.getElementById('speechContext').value,
                tone: document.getElementById('speechTone').value,
                duration: parseInt(document.getElementById('speechDuration').value),
                language: document.getElementById('speechLanguage').value,
                key_points: keyPoints
            })
        });
        
        if (response.ok) {
            const data = await response.json();
            output.innerHTML = `<div style="color: var(--text-primary);">${data.speech}</div>`;
        } else {
            output.innerHTML = '<div style="color: #f44336;">Error generating speech</div>';
        }
    } catch (error) {
        output.innerHTML = '<div style="color: #f44336;">Failed to generate speech</div>';
    } finally {
        progress.style.display = 'none';
    }
});
