document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu on click
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'rgba(255,255,255,0.95)';
        } else {
            header.style.backgroundColor = '#ffffff';
        }
    });

    // Form submission
    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your form submission logic here
        alert('Thank you for your message! We will get back to you soon.');
        form.reset();
    });
});
// Add these to existing JS
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animation on Scroll)
    const aosElements = document.querySelectorAll('[data-aos]');
    
    const aosObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, { threshold: 0.1 });

    aosElements.forEach(element => {
        aosObserver.observe(element);
    });

    // Parallax effect
    window.addEventListener('scroll', function() {
        const parallax = document.querySelector('.parallax');
        const scrolled = window.pageYOffset;
        parallax.style.backgroundPositionY = (scrolled * 0.5) + 'px';
    });

    // Image lightbox
    document.querySelectorAll('.gallery-item img').forEach(img => {
        img.addEventListener('click', function() {
            const lightbox = document.createElement('div');
            lightbox.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.8);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 10000;
                cursor: pointer;
            `;
            
            const fullImg = document.createElement('img');
            fullImg.src = this.src;
            fullImg.style.maxWidth = '90%';
            fullImg.style.maxHeight = '90%';
            
            lightbox.appendChild(fullImg);
            document.body.appendChild(lightbox);
            
            lightbox.addEventListener('click', () => lightbox.remove());
        });
    });

    // Newsletter form
    document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thanks for subscribing!');
        this.reset();
    });
});
// Remove floating button animation
document.querySelectorAll('.cta-button').forEach(button => {
    button.style.animation = 'none';
});

// Center align all elements on load
window.addEventListener('load', function() {
    const centerElements = document.querySelectorAll('.hero-content, .about-content, .newsletter-content, .history-content');
    centerElements.forEach(el => {
        el.style.textAlign = 'center';
        el.style.margin = '0 auto';
    });
});
// Add to existing JS
document.addEventListener('DOMContentLoaded', function() {
    const historyModal = document.querySelector('.history-modal');
    const exploreHistoryBtn = document.querySelector('.history-content .cta-button');
    const closeModalBtn = document.querySelector('.close-modal');

    // Open modal
    exploreHistoryBtn.addEventListener('click', function(e) {
        e.preventDefault();
        historyModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    // Close modal
    closeModalBtn.addEventListener('click', function() {
        historyModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === historyModal) {
            historyModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Close modal with ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && historyModal.style.display === 'block') {
            historyModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});
// Ensure this is in your existing JS
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        // Remove active class from all links
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        
        // Add active class to clicked link
        this.classList.add('active');
    });
});