import { useEffect, useState } from "react";

export const MenuItem = ({setIsOpen, item, icon: Icon }) => {
  const [isItemHovered, setIsMenuHovered] = useState(null);

  

  return (
    <li
      onClick={()=> setIsOpen(false)}
      onMouseEnter={() => setIsMenuHovered(true)}
      onMouseLeave={() => setIsMenuHovered(null)}
      className={`flex items-center 
      gap-1  text-[#959595] list-none
      text-[18px] relative p-2 transition-all duration-300 
       z-20 hover:text-white duration-600 cursor-pointer pl-6`}
    >
      {Icon && <Icon className={"text-[22px]"} />}
      {item}

      <span
        className={`${
          isItemHovered
            ? "visible opacity-100 translate-y-4 background-gradient"
            : "invisible  opacity-0 bg-[#1B1F25] -translate-y-11"
        }      transition-all duration-300 z-20 absolute top-0 
               right-4  rounded-full h-[13px] w-[13px] `}
      ></span>


<span className={`${
          isItemHovered
            ? "visible opacity-100 translate-y-0 bg-[#2f312f8e] block w-full h-11 "
            : "invisible  opacity-0 -translate-y-11"
        }      transition-all duration-300  -z-20 absolute top-0 
               left-0   `}></span>
    </li>
  );
};
