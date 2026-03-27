if (!window.API_BASE_URL) {
    window.API_BASE_URL = 'http://127.0.0.1:8000';
}
const API_BASE_URL = window.API_BASE_URL;

document.getElementById('issueForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    try {
        const token = localStorage.getItem('access_token');
        const response = await fetch(`${API_BASE_URL}/issues`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: document.getElementById('issueTitle').value,
                description: document.getElementById('issueDescription').value,
                category: document.getElementById('issueCategory').value,
                location: document.getElementById('issueLocation').value,
                priority: document.getElementById('issuePriority').value,
                reported_by_name: document.getElementById('issueReportedBy').value
            })
        });
        if (response.ok) {
            alert('Issue reported successfully!');
            document.getElementById('issueForm').reset();
            refreshIssues();
            loadStats();
        }
    } catch (error) {
        alert('Failed to report issue');
    }
});

async function loadStats() {
    try {
        const token = localStorage.getItem('access_token');
        const response = await fetch(`${API_BASE_URL}/issues/stats`, {
            headers: {'Authorization': `Bearer ${token}`}
        });
        if (response.ok) {
            const stats = await response.json();
            document.getElementById('pendingCount').textContent = stats.pending;
            document.getElementById('inProgressCount').textContent = stats.in_progress;
            document.getElementById('resolvedCount').textContent = stats.resolved;
            document.getElementById('totalCount').textContent = stats.total;
        }
    } catch (error) {
        console.error('Error loading stats:', error);
    }
}

async function refreshIssues() {
    try {
        const token = localStorage.getItem('access_token');
        const response = await fetch(`${API_BASE_URL}/issues`, {
            headers: {'Authorization': `Bearer ${token}`}
        });
        if (response.ok) {
            const issues = await response.json();
            displayIssues(issues);
        }
    } catch (error) {
        console.error('Error loading issues:', error);
    }
}

function displayIssues(issues) {
    const container = document.getElementById('issuesList');
    if (issues.length === 0) {
        container.innerHTML = '<div class="empty-state"><div class="empty-state-icon">🏘️</div><p>No issues tracked yet</p></div>';
        return;
    }
    container.innerHTML = issues.map(i => `
        <div class="document-item">
            <h4>${i.category} - ${i.title}</h4>
            <div class="document-meta">
                Status: ${i.status} | Priority: ${i.priority} | ${new Date(i.created_at).toLocaleDateString()}
            </div>
        </div>
    `).join('');
}

function showInsights() {
    alert('AI Insights coming soon!');
}

function showStatusReport() {
    alert('Status Report coming soon!');
}

loadStats();
refreshIssues();
