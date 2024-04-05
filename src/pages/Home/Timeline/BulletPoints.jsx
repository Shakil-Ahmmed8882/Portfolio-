import { IoMdCheckmarkCircle } from "react-icons/io";



export const BulletPoint = ({bulletpoint}) => {
    return (
        <div className="flex relative items-center gap-3 text-[18px]"><IoMdCheckmarkCircle className="text-[18px] text-primary-color "/>{bulletpoint.slice(0,40)}
        
        <span className="absolute top-2 left-1 w-3 h-3 rounded-full -z-10 bg-[white]"></span>
        </div>

    );
};

