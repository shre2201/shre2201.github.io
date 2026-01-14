document.addEventListener('DOMContentLoaded', () => {
    // 1. Page Fade-in
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);

    // 2. Set Year
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // 3. Hero Reveal Animation (for home page)
    const heroReveal = document.getElementById('hero-reveal');
    if (heroReveal) {
        setTimeout(() => {
            heroReveal.classList.add('reveal');
        }, 300);
    }

    // 4. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    const bgOverlay = document.getElementById('bg-overlay');

    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            if (bgOverlay && !bgOverlay.classList.contains('scrolled')) {
                bgOverlay.classList.add('scrolled');
            }
        } else {
            // Only remove scrolled if we're on the home page hero
            const isHomePage = window.location.pathname.endsWith('index.html') || window.location.pathname === '/portfolio/' || window.location.pathname.endsWith('/');
            if (isHomePage) {
                navbar.classList.remove('scrolled');
                if (bgOverlay) bgOverlay.classList.remove('scrolled');
            }
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    // 5. Intersection Observer for Scroll Animations
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                // Once revealed, no need to observe anymore
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe containers or specific elements
    const animateElements = document.querySelectorAll('.animate-fade-up, .container, .project-card, .timeline-item');
    animateElements.forEach(el => {
        revealObserver.observe(el);
    });

    // 6. Active Navigation Highlighting
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        // Simple match
        if (currentPath.endsWith(linkPath) || (currentPath.endsWith('/') && linkPath === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // 7. Page Transition Effect for Internal Links
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.startsWith('http') || href.startsWith('mailto')) return;

            e.preventDefault();
            document.body.classList.remove('loaded');

            setTimeout(() => {
                window.location.href = href;
            }, 300); // Match transition speed
        });
    });
});
