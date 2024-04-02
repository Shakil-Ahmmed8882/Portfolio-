export const TextBackdrop = ({text,position}) => {
  return (
    <div>
      <h1 className={` 
       ${position?position:' grid justify-start sm:justify-center absolute left-0 -top-20  '}

        -z-20
        absolute
        opacity-15
        text-[#1e20209b]
        font-bold 
        
        font-[Caveat]
        textBackdrop
        text-[500%]
        select-none
        md:text-[380px] p-3
       
       `}>{text}</h1>
    </div>
  );
};