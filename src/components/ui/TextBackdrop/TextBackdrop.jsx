export const TextBackdrop = ({text,position}) => {
  return (
    <div>
      <h1 className={` 
       ${position?'':'left-1 -bottom-56 '}

       -z-10
        absolute
       opacity-15
        text-[#1e2020]
        font-bold 
        font-[Caveat]
        text-[160px]
        select-none
        md:text-[260px] p-3
       
       `}>{text}</h1>
    </div>
  );
};