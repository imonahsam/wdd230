document.addEventListener("DOMContentLoaded", function() {
    const message = document.getElementById("message");
    const currentDate = new Date();
    const lastVisit = localStorage.getItem("lastVisit");

    if (!lastVisit) {
        message.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const daysDiff = Math.floor((currentDate - new Date(lastVisit)) / (1000 * 60 * 60 * 24));
        if (daysDiff < 1) {
            message.textContent = "Back so soon! Awesome!";
        } else {
            const dayString = daysDiff === 1 ? "day" : "days";
            message.textContent = `You last visited ${daysDiff} ${dayString} ago.`;
        }
    }

    // Store current visit date in localStorage
    localStorage.setItem("lastVisit", currentDate);
});