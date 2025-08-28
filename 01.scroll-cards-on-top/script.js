gsap.registerPlugin(ScrollTrigger)

const needsGSAP = !CSS.supports("animation-timeline", "view()");

const cards = document.querySelector(".cards");

const allCards = cards.querySelectorAll(".card");

const scrollTicks = cards.querySelectorAll(".card-scroll-triggers div");

if (needsGSAP) {
  console.warn(`
      [🦖] This portfolio uses the latest CSS features,
      like scroll driven animations (https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll-driven_animations) 
      and view transitions (https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API), 
      your browser does not support (all of) them. \n\nI've added fallback animations, 
      but for the best experience, please consider using a modern chromium-based browser.`);

  scrollTicks.forEach((tick, index) => {
    console.log(tick)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: tick,
        invalidateOnRefresh: true,
        start: "top top",
        end: "bottom top",
        scrub: window.innerWidth > 1024 ? true : false, // remove scrub on mobile (plays at a certain point in stead over a range)
        markers: true,
        toggleActions: "play none play reverse" // use toggleActions for mobile
      }
    });
    const multiplier = index % 2 ? -1 : 1; // checks if index is dividable by 2 (even) or not (odd)
    tl.set(allCards[index], {
      rotate: index != 0 ? 10 * multiplier : 0,
      duration: 0.25
    });
    tl.to(allCards[index], {
      rotate: index != 0 ? 5 * multiplier : 0,
      x: 0,
      duration: 0.25
    });
  });
}