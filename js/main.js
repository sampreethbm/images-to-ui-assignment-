// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');

mobileMenu.addEventListener('click', () => {
    // Basic toggle logic for mobile responsiveness
    navLinks.classList.toggle('active');
    mobileMenu.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
});

// Button Click Interactions
document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', () => {
        alert('Thank you for your interest! This feature is coming soon.');
    });
});
