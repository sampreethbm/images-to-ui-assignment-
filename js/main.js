// Mobile Menu Toggle logic
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Simple alert if menu isn't styled yet for mobile
    if(window.innerWidth < 768) {
        alert("Mobile menu clicked! In a production environment, this would open a side drawer.");
    }
});

// Toast Notification System 
const toast = document.getElementById('toast');

function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Product Interaction [cite: 6]
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
        const productName = card.getAttribute('data-name');
        showToast(`${productName} added to cart!`);
    });
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.05)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});
