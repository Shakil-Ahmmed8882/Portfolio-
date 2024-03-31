import gsap from 'gsap';

export const AnimateDropdown = (element, isOpen) => {
  const tl = gsap.timeline();
  if (isOpen) {
    tl.fromTo(element, { x: 300 }, { x: 0, opacity: 1, duration: 0.8 });
  } else {
    tl.to(element, { x: 300, opacity: 0, duration: 0.8 });
  }
};
