import { CiMenuFries } from "react-icons/ci";


export const Menu = ({setIsOpen}) => {

  return (
    <>
      <CiMenuFries onClick={()=> setIsOpen(true)} className="text-2xl cursor-pointer"/>
    </>
  );
};