export const TextBackdrop = ({text,position}) => {
  return (
    <div>
      <h1 className={` 
       ${position?'':'left-[33%] -top-36 '}

        -z-20
        absolute
        opacity-15
        text-[#1e20209b]
        font-bold 
        font-[Caveat]
        text-[160px]
        select-none
        md:text-[260px] p-3
       
       `}>{text}</h1>
    </div>
  );
};