import gsap from "gsap";

export const animateTimelineCards = () => {
    gsap.from('.timeline-card', {
        opacity: 0,
        y: 100,
        duration: 1,
        stagger: 0.7,
        scrollTrigger: {
            trigger: '.timeline',
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: true,
        },
    });
};
