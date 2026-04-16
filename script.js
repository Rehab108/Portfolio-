document.addEventListener('DOMContentLoaded', () => {
    // 1. Text Animation for Wavy Banner (SVG TextPath)
    // Removed because wavy banner was replaced by new contact section.

    // 2. Mouse Parallax for Background Glow & Tech Icons
    const bgGlow = document.querySelector('.bg-glow');
    const icons = document.querySelectorAll('.tech-icon');

    document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        if (bgGlow) {
            const moveX = (clientX - centerX) * 0.02;
            const moveY = (clientY - centerY) * 0.02;
            bgGlow.style.transform = `translate(${moveX}px, ${moveY}px)`;
        }

        icons.forEach((icon, index) => {
            const depth = (index + 1) * 0.04;
            const moveX = (clientX - centerX) * depth;
            const moveY = (clientY - centerY) * depth;
            icon.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    });

    // 3. Hire Me Cursor Follower
    // Removed because hire cursor was replaced by the new contact form.

    // 5. Reveal Animations with Intersection Observer
    const observerOptions = { threshold: 0.15 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-view');
            }
        });
    }, observerOptions);

    document.querySelectorAll('section, .stat-card, .expertise-card, .work-card').forEach(el => {
        el.classList.add('reveal-hidden');
        observer.observe(el);
    });

    // 6. Sticky Navbar Reveal on Scroll Up
    let lastScrollY = window.scrollY;
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 150) {
            navbar.style.background = 'rgba(8, 19, 34, 0.95)';
            navbar.style.backdropFilter = 'blur(20px)';
            navbar.style.border = '1px solid rgba(255,255,255,0.1)';
        } else {
            navbar.style.background = 'rgba(11, 37, 69, 0.4)';
            navbar.style.border = '1px solid var(--glass-border)';
        }
        
        lastScrollY = currentScrollY;
    });

    // 7. Skills & Tools Filter
    const filterBtns = document.querySelectorAll('.filter-btn');
    const skillCards = document.querySelectorAll('.skill-card');

    if (filterBtns.length > 0 && skillCards.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');

                const filter = btn.getAttribute('data-filter');

                skillCards.forEach(card => {
                    if (filter === 'all' || card.classList.contains(filter)) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // 8. Mobile Menu Toggle
    const menuBtn = document.getElementById('menu-btn');
    const navLinksList = document.querySelector('.nav-links');
    if (menuBtn && navLinksList) {
        menuBtn.addEventListener('click', () => {
            navLinksList.classList.toggle('active');
        });
        // Close menu when a link is clicked
        navLinksList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinksList.classList.remove('active');
            });
        });
    }

    // 9. Back to Top Button
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

});
