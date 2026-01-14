document.addEventListener('DOMContentLoaded', () => {
    // Set Year
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Hero Reveal Animation
    const heroReveal = document.getElementById('hero-reveal');
    if (heroReveal) {
        setTimeout(() => {
            heroReveal.classList.add('reveal');
        }, 100);
    }

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    const bgOverlay = document.getElementById('bg-overlay');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(0, 0, 0, 0.9)';
            bgOverlay.classList.add('scrolled');
        } else {
            navbar.style.background = 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8), transparent)';
            bgOverlay.classList.remove('scrolled');
        }

        // Background transition control
        if (window.scrollY > window.innerHeight * 0.5) {
            document.body.classList.remove('at-home');
        } else {
            document.body.classList.add('at-home');
        }
    });

    // Active Link Tracking & Reveal Animations
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    const observerOptions = {
        threshold: 0.3
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');

                // Update Nav links
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });

                // Add at-home class if home is visible
                if (id === 'home') {
                    document.body.classList.add('at-home');
                } else {
                    document.body.classList.remove('at-home');
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Smooth scroll for nav links (optional override if needed)
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });

                // Update URL hash
                history.pushState(null, null, targetId);
            }
        });
    });

    // Initial state
    document.body.classList.add('at-home');
});
