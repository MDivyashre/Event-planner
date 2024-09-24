const eventForm = document.getElementById('event-form');
const eventInfo = document.getElementById('event-info');

eventForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const eventName = document.getElementById('event-name').value;
    const eventDate = document.getElementById('event-date').value;
    const eventLocation = document.getElementById('event-location').value;
    const eventBudget = document.getElementById('event-budget').value;

    eventInfo.innerHTML = `
        <h2>Event Summary</h2>
        <p><strong>Event Name:</strong> ${eventName}</p>
        <p><strong>Event Date:</strong> ${eventDate}</p>
        <p><strong>Event Location:</strong> ${eventLocation}</p>
        <p><strong>Event Budget:</strong> $${eventBudget}</p>
    `;
});