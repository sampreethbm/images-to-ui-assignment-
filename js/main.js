document.addEventListener('DOMContentLoaded', () => {
    // 1. Scroll-reveal effect
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.s-card, h1, .search-bar').forEach(el => {
        el.classList.add('reveal-init');
        observer.observe(el);
    });

    // 2. Active Card Toggle
    const cards = document.querySelectorAll('.s-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            cards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
        });
    });
});
