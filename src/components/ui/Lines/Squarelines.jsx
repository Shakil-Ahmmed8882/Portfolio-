import gsap from "gsap";
import { useEffect } from "react";

export const Squarelines = () => {

    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1, yoyo: true }); // Set repeat to -1 for infinite looping and yoyo for reversing
        tl.fromTo('.square-line', { x: -1600 }, { x: 0,opacity: 1, duration: 5, zIndex: 99999, stagger: 0.5 }); // Set initial state
    }, []);

    return (
        <>
            <span className="square-line absolute rotate-90 top-5 animate-pulse text-[#343434] right-0">0000034</span>
            <span className="square-line absolute rotate-90 bottom-1/4 animate-pulse text-[#3a3a3a] left-0">0000034</span>
            <span className="square-line absolute w-32 h-[1px] animate-pulse rotate-90 bg-[#515151] -left-8 top-11"></span>
            <span className="square-line absolute w-32 h-[1px] animate-pulse rotate-90 bg-[#515151] -right-8 bottom-32"></span>
        </>
    );
};