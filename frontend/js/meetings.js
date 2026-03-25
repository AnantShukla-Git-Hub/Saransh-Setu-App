const API_BASE_URL = 'http://127.0.0.1:8000';

document.getElementById('meetingForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const progress = document.getElementById('meetingProgress');
    progress.style.display = 'block';
    
    try {
        const token = localStorage.getItem('access_token');
        const response = await fetch(`${API_BASE_URL}/meetings`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: document.getElementById('meetingTitle').value,
                date: document.getElementById('meetingDate').value,
                participants: document.getElementById('meetingParticipants').value,
                notes: document.getElementById('meetingNotes').value,
                language: document.getElementById('meetingLanguage').value
            })
        });
        
        if (response.ok) {
            const data = await response.json();
            alert('Meeting summarized successfully!');
            document.getElementById('meetingForm').reset();
            refreshMeetings();
            showMeetingResult(data);
        } else {
            alert('Error summarizing meeting');
        }
    } catch (error) {
        alert('Failed to process meeting');
    } finally {
        progress.style.display = 'none';
    }
});

async function refreshMeetings() {
    try {
        const token = localStorage.getItem('access_token');
        const response = await fetch(`${API_BASE_URL}/meetings`, {
            headers: {'Authorization': `Bearer ${token}`}
        });
        if (response.ok) {
            const meetings = await response.json();
            displayMeetings(meetings);
        }
    } catch (error) {
        console.error('Error loading meetings:', error);
    }
}

function displayMeetings(meetings) {
    const container = document.getElementById('meetingsList');
    if (meetings.length === 0) {
        container.innerHTML = '<div class="empty-state"><div class="empty-state-icon">💼</div><p>No meetings logged yet</p></div>';
        return;
    }
    container.innerHTML = meetings.map(m => `
        <div class="document-item" onclick="viewMeeting(${m.id})">
            <h4>💼 ${m.title}</h4>
            <p>${m.description}</p>
            <div class="document-meta">Date: ${new Date(m.date).toLocaleString()}</div>
        </div>
    `).join('');
}

function showMeetingResult(data) {
    document.getElementById('modalMeetingTitle').textContent = 'Meeting Summary';
    document.getElementById('modalMeetingSummary').innerHTML = `<h4>Summary:</h4><p>${data.summary}</p>`;
    document.getElementById('modalActionItems').innerHTML = `<h4>Action Items:</h4><ul>${data.action_items.map(item => `<li>${item}</li>`).join('')}</ul>`;
    document.getElementById('meetingModal').style.display = 'flex';
}

function closeMeetingModal() {
    document.getElementById('meetingModal').style.display = 'none';
}

refreshMeetings();
