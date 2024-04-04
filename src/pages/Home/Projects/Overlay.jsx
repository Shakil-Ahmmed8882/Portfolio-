
import { Link } from "react-router-dom"
import { FaArrowsTurnRight } from "react-icons/fa6";


export const Overlay = ({_id,isHovered,image,title,description}) => {


    

    return (
        <div
        style={{ backdropFilter: isHovered  === image?.url? "brightness(0.4) contrast(1.5) drop-shadow(2px 2px 4px) " : "none" }}
        className={`absolute inset-0 transition-all duration-500 flex bg-blend-darken cursor-pointer justify-center items-center`}>
        <div className={`${isHovered && isHovered  === image?.url? 'visible opacity-100 translate-y-0' : 'invisible opacity-0 translate-y-[20px]'} transition-all duration-500  grid space-y-3  text-white p-4 w-full bg-[#0077ff00] rounded-lg card-content `}>
             <h1 className='text-3xl font-title'>{title}</h1>
             <p className='text-[#cccccc] pt-1 pb-4 text-[17px]'>{description.slice(0,115)}</p>
             <Link to={`/project-details/${_id}`} className='relative z-50 font-title flex items-center gap-1 text-[17px] w-16'>View <FaArrowsTurnRight className="text-[#c2c2c2]"/></Link>
        </div>  
    </div>
    )
}