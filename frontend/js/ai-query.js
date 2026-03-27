if (!window.API_BASE_URL) {
    window.API_BASE_URL = 'http://127.0.0.1:8000';
}
const API_BASE_URL = window.API_BASE_URL;

document.getElementById('queryForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const question = document.getElementById('queryQuestion').value;
    const searchContext = document.getElementById('searchContext').value;
    const language = document.getElementById('responseLanguage').value;
    
    const queryProgress = document.getElementById('queryProgress');
    const responseBox = document.getElementById('queryResponse');
    
    queryProgress.style.display = 'block';
    responseBox.innerHTML = '<div class="empty-state"><div class="empty-state-icon">⏳</div><p>Processing your query...</p></div>';
    
    try {
        const token = localStorage.getItem('access_token');
        const response = await fetch(`${API_BASE_URL}/query`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                question: question,
                search_context: searchContext,
                language: language
            })
        });
        
        if (response.ok) {
            const data = await response.json();
            displayResponse(data.answer, data.sources);
        } else {
            const error = await response.json();
            responseBox.innerHTML = `<div style="color: #f44336;">Error: ${error.detail}</div>`;
        }
    } catch (error) {
        console.error('Query error:', error);
        responseBox.innerHTML = '<div style="color: #f44336;">Failed to process query. Please check if Ollama is running.</div>';
    } finally {
        queryProgress.style.display = 'none';
    }
});

function displayResponse(answer, hasSources) {
    const responseBox = document.getElementById('queryResponse');
    const sourceNote = hasSources ? '\n\n📚 Answer based on your uploaded documents and data.' : '\n\n💡 Answer based on general knowledge.';
    responseBox.innerHTML = `<div style="color: var(--text-primary);">${answer}${sourceNote}</div>`;
}

function askSuggested(question) {
    document.getElementById('queryQuestion').value = question;
    document.getElementById('queryForm').dispatchEvent(new Event('submit'));
}
