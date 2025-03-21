import './dark-mode';

// Mobile menu toggle function
window.toggleMobileMenu = function(element) {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('is-active');
        document.body.classList.toggle('menu-open');
    }
};

// Gallery grid modal functions
window.galleryGridShowModal = function(element) {
    const cardWrapper = element.closest('.card-wrapper');
    const modalWrapper = cardWrapper.querySelector('.grid-card-modal-wrapper');
    if (modalWrapper) {
        modalWrapper.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
};

window.galleryGridCollapseModal = function(element) {
    const modalWrapper = element.closest('.grid-card-modal-wrapper');
    if (modalWrapper) {
        modalWrapper.classList.remove('active');
        // Restore scrolling after transition completes
        setTimeout(() => {
            document.body.style.overflow = '';
        }, 300);
    }
};

// Initialize any components
document.addEventListener('DOMContentLoaded', function() {
    // Additional initialization code can go here
}); 