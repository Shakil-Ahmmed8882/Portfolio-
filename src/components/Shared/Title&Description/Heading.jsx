import { SectionSubTitle } from "../../ui/Title/SectionSubTitle";

export const Heading = ({ text, position, type, subtitle, children }) => {

  const h1 = type === 'h1' ? 'text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[60px] font-body font-bold' : 'text-5xl'
  return (
    <div className={`text-${position}`}>
      {
        children ?
          <>
          {children}
          </>
          :
          <>
            <h1 className={` ${h1} text-[#d4d4d4]  font-bold font-title mb-1 lg:mb-4`}>{text}</h1>
            {
              subtitle && <SectionSubTitle subtitle={subtitle} />
            }
          </>
      }


    </div>
  );
};