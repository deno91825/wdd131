const lastUpdatedElement = document.getElementById("last-updated");

function updateLastUpdated() {
    const now = new Date();

    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const timeOptions = { hour: '2-digit', minute: '2-digit' };

    const formattedDate = now.toLocaleDateString(undefined, dateOptions);
    const formattedTime = now.toLocaleTimeString(undefined, timeOptions);

    lastUpdatedElement.textContent =
        `Last Updated: ${formattedDate} • ${formattedTime}`;
}

updateLastUpdated();