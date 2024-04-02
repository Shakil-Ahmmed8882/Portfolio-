import { useState } from "react";
import { Dropdown } from "./Dropdown/Dropdown";
import { Menu } from "./Menu";

export const SidebarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative !z-50">
     <Menu setIsOpen={setIsOpen}/>
     <Dropdown isOpen={isOpen} setIsOpen={setIsOpen}/>
    </div>
  );
};