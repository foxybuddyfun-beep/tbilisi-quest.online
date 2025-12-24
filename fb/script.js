// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Early Access Form Handler
const earlyAccessForm = document.getElementById('early-access-form');
const formMessage = document.getElementById('form-message');

if (earlyAccessForm) {
    earlyAccessForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const emailInput = this.querySelector('input[type="email"]');
        const email = emailInput.value.trim();
        
        if (!email) {
            showMessage('Пожалуйста, введите email', 'error');
            return;
        }
        
        // Here you would typically send the email to your backend
        // For now, we'll just simulate a successful submission
        try {
            // Simulate API call
            await simulateApiCall(email);
            
            showMessage('Спасибо! Мы отправим вам обновления по продукту.', 'success');
            emailInput.value = '';
            
            // Optional: Send to analytics or backend
            // await fetch('/api/early-access', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({ email })
            // });
        } catch (error) {
            showMessage('Произошла ошибка. Попробуйте позже.', 'error');
        }
    });
}

function showMessage(text, type) {
    formMessage.textContent = text;
    formMessage.className = `form-message ${type}`;
    
    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.className = 'form-message';
    }, 5000);
}

function simulateApiCall(email) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Email submitted:', email);
            resolve();
        }, 500);
    });
}

// Support Handler
function handleSupport(amount) {
    // Here you would integrate with a payment processor like Stripe, PayPal, etc.
    // For now, we'll show an alert with instructions
    
    const message = amount === 50 
        ? 'Спасибо за поддержку! Пожалуйста, свяжитесь с Давидом в LinkedIn для завершения оплаты $50.'
        : 'Спасибо за поддержку! Пожалуйста, свяжитесь с Давидом в LinkedIn для завершения оплаты $500.';
    
    alert(message);
    
    // Optional: Open LinkedIn in new tab
    // window.open('https://linkedin.com/in/davidmamforia', '_blank');
    
    // In production, you would integrate with payment processor:
    // if (amount === 50) {
    //     // Redirect to Stripe checkout for $50
    //     window.location.href = '/checkout?amount=50';
    // } else {
    //     // Redirect to Stripe checkout for $500
    //     window.location.href = '/checkout?amount=500';
    // }
}

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for fade-in animation
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});

// Add hover effects to cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.feature-card, .tier-card, .example-item');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.2s ease, box-shadow 0.2s ease';
        });
    });
});



