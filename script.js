function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const hmDisplay = document.getElementById('hm-display');
    const secondsDisplay = document.getElementById('seconds-display');

    if (hmDisplay) {
        hmDisplay.textContent = hours + ':' + minutes;
    }
    if (secondsDisplay) {
        secondsDisplay.textContent = seconds;
    }
}

// Update every 1 second (1000ms)
setInterval(updateClock, 1000);

// Run immediately on load
updateClock();