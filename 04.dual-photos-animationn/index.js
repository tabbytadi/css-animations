gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {







  gsap.to(".image-figure--1 img", {
    scrollTrigger: {
      trigger: ".images-container",
      start: "top bottom",
      end: "bottom top",
      scrub: 1.5
    },
    y: 100,
    rotate: 15,
    duration: 1
  });

  gsap.to(".image-figure--1", {
    scrollTrigger: {
      trigger: ".images-container",
      start: "top bottom",
      end: "bottom top",
      scrub: 1.5
    },
    y: -100,
    rotate: -15,
    duration: 1
  });

  gsap.to(".image-figure--2 img", {
    scrollTrigger: {
      trigger: ".images-container",
      start: "top bottom",
      end: "bottom top",
      scrub: 1.5
    },
    y: -120,
    rotate: -18,
    duration: 1
  });

  gsap.to(".image-figure--2", {
    scrollTrigger: {
      trigger: ".images-container",
      start: "top bottom",
      end: "bottom top",
      scrub: 1.5
    },
    y: 120,
    rotate: 8,
    duration: 1
  });
});