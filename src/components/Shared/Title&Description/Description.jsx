export const Description = ({text,position}) => {
  return (
    <>
     <p className={`text-${position} text-[#a7a7a7] text-[15px]
      sm:text-[17px] md:text-[19px] md:pr-16 lg:pr-0 lg:text-[19px] xl:text-[20px] font-body`}>{text}</p> 
    </>
  );
};