gsap.registerPlugin(ScrollTrigger);

gsap.to(".text", {
  scale: 20, // Zoom out to its original size
  scrollTrigger: {
    trigger: ".div1", // Use .div1 as the trigger for scrolling
    start: "top top", // Start animation when .div1 reaches the top of the viewport
    end: "50% top", // End animation when .div1's bottom reaches the top of the viewport
    markers: true, // Debug markers to see start/end points
    scrub: 1, // Smoothly ties the animation to the scroll position
    pin: true,
  },
});

gsap.to(".div2", {
  top: "130vh", // Move up to the middle of the viewport
  scrollTrigger: {
    trigger: ".container",
    start: "top 60%",
    end: "90% top", // When .div1 is fully scrolled out of the viewport
    markers: true,
    scrub: 1,
  },
});
