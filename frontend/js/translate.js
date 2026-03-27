if (!window.API_BASE_URL) {
    window.API_BASE_URL = 'http://127.0.0.1:8000';
}
const API_BASE_URL = window.API_BASE_URL;

document.getElementById('translateForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const fromLang = document.getElementById('fromLanguage').value;
    const toLang = document.getElementById('toLanguage').value;
    const text = document.getElementById('sourceText').value;
    
    if (fromLang === toLang) {
        alert('Please select different languages for translation');
        return;
    }
    
    const progress = document.getElementById('translateProgress');
    const resultDiv = document.getElementById('translationResult');
    
    progress.style.display = 'block';
    resultDiv.style.display = 'none';
    
    try {
        const token = localStorage.getItem('access_token');
        const response = await fetch(`${API_BASE_URL}/translate`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                text: text,
                from_language: fromLang,
                to_language: toLang
            })
        });
        
        if (response.ok) {
            const data = await response.json();
            document.getElementById('translatedText').textContent = data.translation;
            resultDiv.style.display = 'block';
        } else {
            const error = await response.json();
            alert(`Error: ${error.detail}`);
        }
    } catch (error) {
        console.error('Translation error:', error);
        alert('Translation failed. Please check if Ollama is running.');
    } finally {
        progress.style.display = 'none';
    }
});

function detectLanguage() {
    alert('Language detection coming soon! For now, please select the source language manually.');
}
