document.addEventListener("DOMContentLoaded", function () {
    // Binaural Beats Toggle
    const audio = document.getElementById("binaural-audio");
    const toggleButton = document.getElementById("music-toggle");
    let isPlaying = false;

    toggleButton.addEventListener("click", () => {
        if (isPlaying) {
            audio.pause();
            toggleButton.textContent = "Play Binaural Beats";
        } else {
            audio.play();
            toggleButton.textContent = "Pause Binaural Beats";
        }
        isPlaying = !isPlaying;
    });

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Fade-in Animation for Sections
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = "translateY(50px)";
        section.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
        observer.observe(section);
    });
});