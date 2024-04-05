import { TfiClose } from "react-icons/tfi";
import { MenuItem } from "./MenuIte";
import { useEffect, useRef } from "react";
import { AnimateDropdown } from "../../../GSAP/AnimatedDropdown";
import logo from '../../../../../assets/images/logo.png'


// icons 
import { TiHome } from "react-icons/ti";
import { GiSkills } from "react-icons/gi";
import { FaServicestack } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { IoCheckmarkCircle } from "react-icons/io5";
import { LightMood } from "../../LightMood";



export const Dropdown = ({ isOpen, setIsOpen }) => {
  const comp = useRef(null);

  // GSAP animation 
  useEffect(() => {
    AnimateDropdown(comp.current, isOpen)
  }, [isOpen]);


  // Open and close menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div ref={comp} className={`
    fixed
    top-0 right-0
    rounded-lg
    bg-[#202120]
     w-72
     zIndex h-screen space-y-3
    ${isOpen ? 'opacity-100 zIndex z-50' : ' opacity-0'}
    `}>



      <img src={'https://www.headshotslv.com/wp-content/uploads/2019/06/professional-headshots-las-vegas.jpg'} className="object-cover border-[3px] border-primary-color h-9 w-9 mb-14 ml-9 mt-6 rounded-full" alt="" />

      <MenuItem setIsOpen={setIsOpen} icon={TiHome} item={"Home"} />
      <MenuItem setIsOpen={setIsOpen} icon={GiSkills} item={"skills"} />
      <MenuItem setIsOpen={setIsOpen} icon={FaServicestack} item={"Sevices"} />
      <MenuItem setIsOpen={setIsOpen} icon={IoMdContact} item={"Contact"} />
      <MenuItem setIsOpen={setIsOpen} icon={IoCheckmarkCircle} item={"Testemonials"} />
      <MenuItem setIsOpen={setIsOpen} icon={GiSkills} item={"Pricing"} />
      <MenuItem setIsOpen={setIsOpen} icon={GiSkills} item={"Blog"} />


      <div className="ml-6 mt-auto">
        <LightMood />
      </div>
      <TfiClose onClick={toggleMenu} className="absolute text-[white] top-3 right-5 text-[30px] cursor-pointer rounded-full hover:bg-red-600 transition-all duration-300 p-[5px]" />
    </div>
  );
};