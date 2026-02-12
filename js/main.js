// Initialize Icons
lucide.createIcons();

// Toast Notification Logic
const toast = document.getElementById('toast');

function showToast(message) {
    toast.textContent = message;
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';
    
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(20px)';
    }, 3000);
}

// Add event listeners to product cards
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
        const name = card.getAttribute('data-name');
        showToast(`${name} added to your bag.`);
    });
});

// Navbar transparency transition
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 20) {
        nav.style.borderBottom = '1px solid rgba(0,0,0,0.1)';
    } else {
        nav.style.borderBottom = '1px solid rgba(0,0,0,0.05)';
    }
});
