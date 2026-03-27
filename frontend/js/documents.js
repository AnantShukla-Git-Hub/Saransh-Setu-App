if (!window.API_BASE_URL) {
    window.API_BASE_URL = 'http://127.0.0.1:8000';
}
const API_BASE_URL = window.API_BASE_URL;

document.getElementById('documentUploadForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const fileInput = document.getElementById('documentFile');
    const language = document.getElementById('docLanguage').value;
    const summaryLength = document.getElementById('summaryLength').value;
    const tags = document.getElementById('docTags').value;
    
    if (!fileInput.files[0]) {
        alert('Please select a file');
        return;
    }
    
    const file = fileInput.files[0];
    const maxSize = 25 * 1024 * 1024; // 25MB
    
    if (file.size > maxSize) {
        alert('File too large! Maximum size is 25MB');
        return;
    }
    
    const formData = new FormData();
    formData.append('file', file);
    formData.append('language', language);
    formData.append('summary_length', summaryLength);
    formData.append('tags', tags);
    
    const uploadProgress = document.getElementById('uploadProgress');
    uploadProgress.style.display = 'block';
    
    try {
        const token = localStorage.getItem('access_token');
        const response = await fetch(`${API_BASE_URL}/documents/upload`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: formData
        });
        
        if (response.ok) {
            const data = await response.json();
            alert('Document uploaded and summarized successfully!');
            document.getElementById('documentUploadForm').reset();
            refreshDocuments();
        } else {
            const error = await response.json();
            alert(`Error: ${error.detail}`);
        }
    } catch (error) {
        console.error('Upload error:', error);
        alert('Failed to upload document. Please try again.');
    } finally {
        uploadProgress.style.display = 'none';
    }
});

async function refreshDocuments() {
    try {
        const token = localStorage.getItem('access_token');
        const response = await fetch(`${API_BASE_URL}/documents`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        
        if (response.ok) {
            const documents = await response.json();
            displayDocuments(documents);
        }
    } catch (error) {
        console.error('Error loading documents:', error);
    }
}

function displayDocuments(documents) {
    const container = document.getElementById('documentsList');
    
    if (documents.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">📄</div>
                <p>No documents uploaded yet</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = documents.map(doc => `
        <div class="document-item" onclick="viewDocument(${doc.id})">
            <h4>📄 ${doc.filename}</h4>
            <p>${doc.summary}</p>
            <div class="document-meta">
                Language: ${doc.language} | Uploaded: ${new Date(doc.uploaded_at).toLocaleString()}
            </div>
        </div>
    `).join('');
}

async function viewDocument(docId) {
    try {
        const token = localStorage.getItem('access_token');
        const response = await fetch(`${API_BASE_URL}/documents/${docId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        
        if (response.ok) {
            const doc = await response.json();
            document.getElementById('modalDocTitle').textContent = doc.filename;
            document.getElementById('modalDocSummary').textContent = doc.summary;
            document.getElementById('documentModal').style.display = 'flex';
        }
    } catch (error) {
        console.error('Error loading document:', error);
    }
}

function closeDocumentModal() {
    document.getElementById('documentModal').style.display = 'none';
}

// Load documents on page load
refreshDocuments();
