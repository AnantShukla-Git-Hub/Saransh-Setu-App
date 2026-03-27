if (!window.API_BASE_URL) {
    window.API_BASE_URL = 'http://127.0.0.1:8000';
}
const API_BASE_URL = window.API_BASE_URL;

document.getElementById('scheduleForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    try {
        const token = localStorage.getItem('access_token');
        const response = await fetch(`${API_BASE_URL}/schedules`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: document.getElementById('scheduleTitle').value,
                description: document.getElementById('scheduleDescription').value,
                start_time: document.getElementById('scheduleStart').value,
                end_time: document.getElementById('scheduleEnd').value,
                location: document.getElementById('scheduleLocation').value,
                priority: document.getElementById('schedulePriority').value
            })
        });
        if (response.ok) {
            alert('Schedule added successfully!');
            document.getElementById('scheduleForm').reset();
            loadSchedules();
        }
    } catch (error) {
        alert('Failed to add schedule');
    }
});

async function loadSchedules() {
    try {
        const token = localStorage.getItem('access_token');
        const response = await fetch(`${API_BASE_URL}/schedules`, {
            headers: {'Authorization': `Bearer ${token}`}
        });
        if (response.ok) {
            const schedules = await response.json();
            displaySchedules(schedules);
        }
    } catch (error) {
        console.error('Error loading schedules:', error);
    }
}

function displaySchedules(schedules) {
    const container = document.getElementById('scheduleView');
    if (schedules.length === 0) {
        container.innerHTML = '<div class="empty-state"><div class="empty-state-icon">📅</div><p>No schedule items yet</p></div>';
        return;
    }
    container.innerHTML = schedules.map(s => `
        <div class="document-item">
            <h4>📅 ${s.title}</h4>
            <p>${s.description || 'No description'}</p>
            <div class="document-meta">${new Date(s.date).toLocaleString()}</div>
        </div>
    `).join('');
}

function showScheduleView(view) {
    document.querySelectorAll('.schedule-tab').forEach(t => t.classList.remove('active'));
    event.target.classList.add('active');
    loadSchedules();
}

loadSchedules();
