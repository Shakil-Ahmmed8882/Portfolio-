import gsap from "gsap";

export const animateCard = () => {
    // Define the animation timeline
    const timeline = gsap.timeline({ repeat: -1 }); // Infinite repeat

    // Add animation steps to the timeline
    timeline.fromTo('.card-content', {
        opacity: 0.5,
        y: 100,
        stagger: 0.5
    }, {
        opacity: 1,
        y: 0,
        stagger: 0.5,
        duration: 1,
        ease: "power2.out" // You can choose the easing function as per your preference
    }).to('.card-content', {
        opacity: 1,
        y: 0,
        stagger: 0.5,
        duration: 1,
        ease: "power2.inOut" // You can choose the easing function as per your preference
    });

    // Return the timeline
    return timeline;
};
