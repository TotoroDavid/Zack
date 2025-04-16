console.log("Animations loaded");

// Initialize GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Initialize Lenis for smooth scrolling
const lenis = new Lenis({
    duration: 1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    smoothWheel: true,
    touchMultiplier: 1.5
});

// Sync Lenis with GSAP ScrollTrigger
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);

// Helper function to check if element exists
function elementExists(selector) {
    return document.querySelector(selector) !== null;
}

// Initial states
function setInitialStates() {
    // Navbar
    if (elementExists('.navbar_component')) {
        gsap.set('.navbar_component', { y: -20, opacity: 0 });
    }
    if (elementExists('.navbar_menu-link-wrapper a')) {
        gsap.set('.navbar_menu-link-wrapper a', { y: -10, opacity: 0 });
    }
    if (elementExists('.button.is-small')) {
        gsap.set('.button.is-small', { y: -10, opacity: 0 });
    }

    // Hero section
    if (elementExists('.header_content svg')) {
        gsap.set('.header_content svg', { scale: 0.95, opacity: 0 });
    }
    if (elementExists('.heading-style-h1')) {
        gsap.set('.heading-style-h1', { y: 30, opacity: 0 });
    }
    if (elementExists('.text-size-medium.max-width-xxxsmall')) {
        gsap.set('.text-size-medium.max-width-xxxsmall', { y: 20, opacity: 0 });
    }
    if (elementExists('.button-group')) {
        gsap.set('.button-group', { y: 20, opacity: 0 });
    }
    if (elementExists('.header__hero-image')) {
        gsap.set('.header__hero-image', { y: 30, opacity: 0 });
    }

    // Grid background
    const gridImages = document.querySelectorAll('.grid-backgroung-header .grid-item img');
    if (gridImages.length > 0) {
        gsap.set(gridImages, { y: 20, opacity: 0 });
    }

    // Layout cards
    if (elementExists('.layout_card')) {
        gsap.set('.layout_card', { y: 50, opacity: 0 });
    }

    // Features section
    if (elementExists('.icon-brand')) {
        gsap.set('.icon-brand', { scale: 0.9, opacity: 0 });
    }
    if (elementExists('.heading-style-h3')) {
        gsap.set('.heading-style-h3', { y: 20, opacity: 0 });
    }
    if (elementExists('.wtapper__beneficts li')) {
        gsap.set('.wtapper__beneficts li', { y: 15, opacity: 0 });
    }
    if (elementExists('.layout409_image')) {
        gsap.set('.layout409_image', { y: 20, opacity: 0 });
    }
}

// Main animation sequence
function initAnimations() {
    // Navbar animation sequence
    if (elementExists('.navbar_component')) {
        const navTimeline = gsap.timeline();
        navTimeline
            .to('.navbar_component', {
                y: 0,
                opacity: 1,
                duration: 0.6,
                ease: 'power2.out'
            });

        if (elementExists('.navbar_menu-link-wrapper a')) {
            navTimeline.to('.navbar_menu-link-wrapper a', {
                y: 0,
                opacity: 1,
                duration: 0.4,
                stagger: 0.1,
                ease: 'power2.out'
            }, '-=0.2');
        }

        if (elementExists('.button.is-small')) {
            navTimeline.to('.button.is-small', {
                y: 0,
                opacity: 1,
                duration: 0.4,
                ease: 'power2.out'
            }, '-=0.2');
        }
    }

    // Hero section sequence
    if (elementExists('.header_content')) {
        const heroTimeline = gsap.timeline({ delay: 0.2 });

        if (elementExists('.header_content svg')) {
            heroTimeline.to('.header_content svg', {
                scale: 1,
                opacity: 1,
                duration: 0.6,
                ease: 'power2.out'
            });
        }

        if (elementExists('.heading-style-h1')) {
            heroTimeline.to('.heading-style-h1', {
                y: 0,
                opacity: 1,
                duration: 0.6,
                ease: 'power2.out'
            }, '-=0.3');
        }

        if (elementExists('.text-size-medium.max-width-xxxsmall')) {
            heroTimeline.to('.text-size-medium.max-width-xxxsmall', {
                y: 0,
                opacity: 1,
                duration: 0.6,
                ease: 'power2.out'
            }, '-=0.3');
        }

        if (elementExists('.button-group')) {
            heroTimeline.to('.button-group', {
                y: 0,
                opacity: 1,
                duration: 0.6,
                ease: 'power2.out'
            }, '-=0.3');
        }

        if (elementExists('.header__hero-image')) {
            heroTimeline.to('.header__hero-image', {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power2.out'
            }, '-=0.4');
        }
    }

    // Grid background animations
    const gridImages = document.querySelectorAll('.grid-backgroung-header .grid-item img');
    if (gridImages.length > 0) {
        gsap.to(gridImages, {
            y: 0,
            opacity: 0.6,
            duration: 0.8,
            stagger: {
                amount: 1,
                from: "random"
            },
            ease: 'power2.out'
        });

        // Parallax effect for grid images
        gridImages.forEach((img, index) => {
            // Check if image is loaded
            if (img.complete) {
                initParallax(img, index);
            } else {
                img.addEventListener('load', () => initParallax(img, index));
            }
        });
    }

    // Layout cards sequence
    const layoutCards = document.querySelectorAll('.layout_card');
    if (layoutCards.length > 0) {
        gsap.to(layoutCards, {
            scrollTrigger: {
                trigger: '.layout_component',
                start: 'top 75%',
                toggleActions: 'play none none reverse'
            },
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out'
        });

        // Add hover effects to cards
        layoutCards.forEach(initCardHover);
    }

    // Features animations
    initFeatureAnimations();
}

// Helper function for parallax effect
function initParallax(img, index) {
    gsap.to(img, {
        y: (index % 2 === 0) ? -15 : -25,
        ease: 'none',
        scrollTrigger: {
            trigger: img,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
        }
    });
}

// Helper function for card hover
function initCardHover(card) {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            y: -5,
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            y: 0,
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    // Add hover effect to images within cards
    const cardImage = card.querySelector('.layout409_image');
    if (cardImage) {
        cardImage.addEventListener('mouseenter', () => {
            gsap.to(cardImage, {
                scale: 1.02,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        cardImage.addEventListener('mouseleave', () => {
            gsap.to(cardImage, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    }
}

// Helper function for feature animations
function initFeatureAnimations() {
    const features = document.querySelectorAll('.layout_card');
    features.forEach((feature, index) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: feature,
                start: 'top 75%',
                toggleActions: 'play none none reverse'
            }
        });

        const icon = feature.querySelector('.icon-brand');
        const heading = feature.querySelector('.heading-style-h3');
        const benefits = feature.querySelectorAll('.wtapper__beneficts li');
        const image = feature.querySelector('.layout409_image');

        if (icon) {
            tl.to(icon, {
                scale: 1,
                opacity: 1,
                duration: 0.4
            });
        }

        if (heading) {
            tl.to(heading, {
                y: 0,
                opacity: 1,
                duration: 0.4
            }, '-=0.2');
        }

        if (benefits.length > 0) {
            tl.to(benefits, {
                y: 0,
                opacity: 1,
                stagger: 0.1,
                duration: 0.4
            }, '-=0.2');
        }

        if (image) {
            tl.to(image, {
                y: 0,
                opacity: 1,
                duration: 0.6
            }, '-=0.3');
        }
    });
}

// Wait for DOM content and resources to load
window.addEventListener('load', () => {
    // Ensure GSAP and ScrollTrigger are loaded
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
        console.error('GSAP or ScrollTrigger not loaded');
        return;
    }

    setInitialStates();
    initAnimations();
    ScrollTrigger.refresh();

    // Initialize container queries
    if (typeof observeContainer === 'function') {
        observeContainer({
            breakpoints: {
                sm: '30em',
                md: '48em',
                lg: '62em',
                xl: '80em'
            }
        });
    }
});