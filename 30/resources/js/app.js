import './dark-mode';

// Mobile menu toggle function
window.toggleMobileMenu = function(element) {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('is-active');
        document.body.classList.toggle('menu-open');
    }
};

// Initialize any components
document.addEventListener('DOMContentLoaded', function() {
    // Additional initialization code can go here
}); 