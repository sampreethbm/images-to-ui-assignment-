// Aesthetic Micro-interactions
lucide.createIcons();

// Smooth reveal on scroll
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('.lux-card, .cat-item').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "0.8s cubic-bezier(0.2, 0, 0, 1)";
    observer.observe(el);
});

// Dynamic Search interaction
const searchInput = document.querySelector('.search-bar-container input');
searchInput.addEventListener('focus', () => {
    document.querySelector('.search-bar-container').style.boxShadow = "0 0 0 4px rgba(255, 107, 0, 0.1)";
});
searchInput.addEventListener('blur', () => {
    document.querySelector('.search-bar-container').style.boxShadow = "none";
});
