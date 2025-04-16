# System Patterns

## Animation Naming Conventions

- `.fade-in-up`: Elements fade in while moving up
- `.reveal-left`: Content reveals from left
- `.scale-on-scroll`: Elements scale based on scroll position
- `.stagger-children`: Children elements animate in sequence
- `.parallax`: Background elements with parallax effect

## Reusable GSAP Timelines

```javascript
// Basic fade-in timeline
const fadeIn = gsap.timeline({
  defaults: { ease: "power2.out" },
});

// Stagger reveal timeline
const staggerReveal = gsap.timeline({
  defaults: { ease: "power2.out" },
});
```

## ScrollTrigger Configurations

```javascript
// Default ScrollTrigger settings
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  toggleActions: "play none none reverse",
  start: "top 80%",
  end: "bottom 20%",
});
```

## Animation Principles

1. Use CSS transforms for performance
2. Implement proper cleanup with gsap.context()
3. Consider reduced motion preferences
4. Optimize for mobile devices
5. Maintain consistent timing and easing
