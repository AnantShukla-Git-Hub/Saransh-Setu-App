if (!window.API_BASE_URL) {
    window.API_BASE_URL = 'http://127.0.0.1:8000';
}
const API_BASE_URL = window.API_BASE_URL;

async function searchLogs() {
    const userFilter = document.getElementById('userFilter').value;
    const actionFilter = document.getElementById('actionFilter').value;
    
    try {
        const token = localStorage.getItem('access_token');
        let url = `${API_BASE_URL}/audit-logs?`;
        if (userFilter) url += `user_filter=${userFilter}&`;
        if (actionFilter !== 'All Actions') url += `action_filter=${actionFilter}`;
        
        const response = await fetch(url, {
            headers: {'Authorization': `Bearer ${token}`}
        });
        
        if (response.ok) {
            const logs = await response.json();
            displayLogs(logs);
        }
    } catch (error) {
        console.error('Error loading logs:', error);
    }
}

function displayLogs(logs) {
    const tbody = document.getElementById('auditTableBody');
    
    if (logs.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" style="text-align: center; padding: 40px;">No logs found</td></tr>';
        return;
    }
    
    tbody.innerHTML = logs.map(log => `
        <tr>
            <td>${new Date(log.timestamp).toLocaleString()}</td>
            <td>${log.user}</td>
            <td>${log.action}</td>
            <td>${log.details || '-'}</td>
            <td>localhost</td>
            <td><span style="color: #4caf50;">✓ Success</span></td>
        </tr>
    `).join('');
}

// Auto-load logs on page load
searchLogs();
