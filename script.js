// Newsletter form handling
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('newsletter-form');
    const emailInput = document.getElementById('email-input');
    const formMessage = document.getElementById('form-message');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = emailInput.value.trim();
        
        // Basic email validation
        if (!isValidEmail(email)) {
            showMessage('Please enter a valid email address.', 'error');
            return;
        }

        // Simulate form submission
        showMessage('Processing...', '');
        
        // In a real application, you would send this to a backend API
        setTimeout(() => {
            showMessage('Thank you! We\'ll notify you when we launch! 🎉', 'success');
            emailInput.value = '';
        }, 1000);
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function showMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = 'form-message';
        if (type) {
            formMessage.classList.add(type);
        }
    }
});
