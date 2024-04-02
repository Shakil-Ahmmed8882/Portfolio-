import { useState, useEffect } from "react";
import gsap from "gsap";

export const Card = ({ service }) => {
    const { name, charge, desc, image } = service || {};

    const [isCardHovered, setIsCardHovered] = useState(false);


    return (
        <div
            onMouseEnter={() => setIsCardHovered(true)}
            onMouseLeave={() => setIsCardHovered(false)}
            className="relative overflow-hidden items-center rounded-lg bg-[#1f1e1e] border-gray-200 p-1 w-full"
            
        >
            <a className="absolute inset-0" href="#" rel="ugc">
                <span className="sr-only">View</span>
            </a>
            <img
                src={image?.url}
                alt="Category 1"
                className="aspect-[4/3] w-full h-full object-cover rounded-lg"
            />
            <div 
            
            style={{ backdropFilter: isCardHovered ? "blur(20px) brightness(0.6)" : "none" }}
            className="absolute inset-0 transition-all duration-500 flex cursor-pointer justify-center items-center">
                <div className={`${isCardHovered ? 'visible opacity-100 translate-y-0' : 'invisible opacity-0 translate-y-[20px]'} transition-all duration-500  flex flex-col justify-center space-y-3  text-white p-4 w-full bg-[#0077ff00] rounded-lg card-content`}>
                    <h3 className="font-semibold font-title text-2xl md:text-2xl">{name}</h3>
                    <p className="text-[#d9d9d9] text-[15px] sm:text-2xl md:text-[17px] font-body">{desc}</p>
                    <p className="text-sm">{charge} $</p>
                </div>
            </div>
        </div>
    );
};