/**
 * Theme 29 - Main JavaScript File
 */

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Theme 29 loaded successfully!');
    
    // Add smooth scrolling to all links
    const links = document.querySelectorAll('a[href^="#"]');
    
    for (const link of links) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    }
    
    // Form validation enhancement
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            // This is just an example - you might want to add custom validation here
            const requiredFields = form.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    // Add a subtle highlight effect
                    field.classList.add('is-invalid');
                    
                    // Remove the highlight when the user starts typing
                    field.addEventListener('input', function() {
                        this.classList.remove('is-invalid');
                    }, { once: true });
                }
            });
            
            if (!isValid) {
                e.preventDefault();
                alert('Please fill all required fields');
            }
        });
    });
}); 