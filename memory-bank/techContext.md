# Technical Context

## Tech Stack

- Webflow export
- GSAP Core
- ScrollTrigger plugin
- match-container.js for container queries
- Live Server for local development

## Required CDN Links

```html
<!-- GSAP Core -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>

<!-- ScrollTrigger -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>

<!-- match-container.js -->
<script src="https://cdn.jsdelivr.net/gh/flowtricks/script@v1.0.4/match-container.js"></script>
```

## File Structure

```
/
├── css/
├── js/
│   └── animations.js
├── images/
└── index.html
```

## Development Setup

1. Local server with Live Server
2. Webflow preview connection
3. Browser dev tools for debugging
4. Mobile device testing
5. Performance monitoring

## Technical Considerations

- Container query breakpoints in EM
- Image loading optimization
- Font loading strategy
- Layout shift prevention
- ScrollTrigger refresh triggers
