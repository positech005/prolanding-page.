function updateDashboard () {
    const now = new Date();

    //update Clock
    const hours = 
    String(now.getHours()).padStart(2, '0');
    const minutes =
    String(now.getMinutes()).padStart(2, '0');
    const seconds =
    String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;

    //update Date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', };
    document.getElementById('date').textcontent = now.toLocaleDateString(undefined, options);
}

// Update every second
setInterval(updateDashboard, 1000);

// Run immediately on load
updateDashboard();
