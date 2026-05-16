gsap.registerPlugin(ScrollTrigger);

// Hero intro
const heroTl = gsap.timeline();

heroTl
  .from(".hero-panel", {
    scale: 0.94,
    opacity: 0,
    duration: 0.9,
    ease: "power3.out"
  })
  .from(".hero-eyebrow", {
    y: 20,
    opacity: 0,
    duration: 0.45
  }, "-=0.6")
  .from(".hero-pill", {
    y: 20,
    opacity: 0,
    duration: 0.45
  }, "-=0.3")
  .from(".mini-label", {
    y: 16,
    opacity: 0,
    duration: 0.4
  }, "-=0.2")
  .from(".hero-girl", {
    y: 70,
    opacity: 0,
    duration: 0.9,
    ease: "power4.out"
  }, "-=0.1")
  .from(".hero-ware", {
    y: 60,
    opacity: 0,
    duration: 0.85,
    ease: "power4.out"
  }, "-=0.55")
  .from(".hero-subtitle", {
    y: 24,
    opacity: 0,
    duration: 0.6
  }, "-=0.45")
  .from(".hero-actions .btn", {
    y: 18,
    opacity: 0,
    duration: 0.45,
    stagger: 0.1
  }, "-=0.25")
  .from(".hero-corner-note span", {
    y: 16,
    opacity: 0,
    duration: 0.4,
    stagger: 0.08
  }, "-=0.25")
  .from(".star", {
    scale: 0.7,
    opacity: 0,
    duration: 1,
    stagger: 0.12,
    ease: "back.out(1.7)"
  }, "-=0.85");

// Floating stars
[
  [".star-1", 30, 20, 6, 7],
  [".star-2", -20, 16, -8, 6],
  [".star-3", 26, -18, 8, 8],
  [".star-4", -22, -14, -6, 6.5],
  [".star-5", 16, 10, 7, 5.8]
].forEach(([selector, y, x, rotate, duration]) => {
  gsap.to(selector, {
    y,
    x,
    rotate,
    duration,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });
});

// Cursor glow
const glow = document.querySelector(".cursor-glow");
window.addEventListener("mousemove", (e) => {
  gsap.to(glow, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.35,
    ease: "power2.out"
  });
});

// Section reveals
gsap.utils.toArray(".section-title, .section-label").forEach((item) => {
  gsap.from(item, {
    scrollTrigger: {
      trigger: item,
      start: "top 84%"
    },
    y: 30,
    opacity: 0,
    duration: 0.7
  });
});

gsap.from(".info-card", {
  scrollTrigger: {
    trigger: ".manifesto-grid",
    start: "top 80%"
  },
  y: 50,
  opacity: 0,
  duration: 0.8,
  stagger: 0.12
});

gsap.from(".code-tile", {
  scrollTrigger: {
    trigger: ".code-grid",
    start: "top 80%"
  },
  scale: 0.94,
  opacity: 0,
  duration: 0.75,
  stagger: 0.1
});

gsap.from(".feature-panel", {
  scrollTrigger: {
    trigger: ".featured-grid",
    start: "top 80%"
  },
  y: 55,
  opacity: 0,
  duration: 0.8,
  stagger: 0.12
});

gsap.from(".concept-card", {
  scrollTrigger: {
    trigger: ".concept-grid",
    start: "top 80%"
  },
  y: 60,
  opacity: 0,
  duration: 0.8,
  stagger: 0.12
});

gsap.to(".ticker-track", {
  xPercent: -35,
  ease: "none",
  scrollTrigger: {
    trigger: ".ticker-wrap",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});

gsap.from(".closing-panel > *", {
  scrollTrigger: {
    trigger: ".closing-panel",
    start: "top 80%"
  },
  y: 28,
  opacity: 0,
  duration: 0.7,
  stagger: 0.1
});

// Hover interactions
document.querySelectorAll(".info-card, .concept-card, .btn, .code-tile, .feature-panel").forEach((item) => {
  item.addEventListener("mouseenter", () => {
    gsap.to(item, {
      y: -5,
      scale: 1.01,
      duration: 0.22,
      ease: "power2.out"
    });
  });

  item.addEventListener("mouseleave", () => {
    gsap.to(item, {
      y: 0,
      scale: 1,
      duration: 0.22,
      ease: "power2.out"
    });
  });
});