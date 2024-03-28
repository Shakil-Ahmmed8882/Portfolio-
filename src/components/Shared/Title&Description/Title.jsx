export const Title = ({text,position}) => {
  return (
    <>
     <h1 className={`text-white text-${position} text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-title mb-1 lg:mb-4`}>{text}</h1> 
    </>
  );
};