// Mobile Menu Toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

// Scroll Fade-In Animation
const hiddenSections = document.querySelectorAll(".hidden");

function handleScroll() {
    hiddenSections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            section.classList.add("show");
        }
    });
}

window.addEventListener("scroll", handleScroll);
handleScroll();
