document.addEventListener("DOMContentLoaded", function () {
    // Binaural Beats Toggle
    const audio = document.getElementById("binaural-audio");
    const musicToggle = document.getElementById("music-toggle");
    let isPlaying = false;

    musicToggle.addEventListener("click", () => {
        if (isPlaying) {
            audio.pause();
            musicToggle.textContent = "Play Binaural Beats";
        } else {
            audio.play();
            musicToggle.textContent = "Pause Binaural Beats";
        }
        isPlaying = !isPlaying;
    });

    // Dark Mode Toggle
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    // Navigation Fix
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetPage = this.getAttribute("href");
            window.location.href = targetPage;
        });
    });
});
