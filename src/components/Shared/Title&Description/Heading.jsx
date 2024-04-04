import { SectionSubTitle } from "../../ui/Title/SectionSubTitle";

export const  Heading = ({ text, position, type, subtitle, children }) => {

  const h1 = type === 'h1' ? 'text-3xl font-bold tracking-tighter sm:text-5xl' : 'text-3xl font-bold tracking-tighter sm:text-4xl'
  return (
    <div className={`text-${position}`}>
      {
        children ?
          <>
          {children}
          </>
          :
          <>
            <h1 className={` ${h1} `}>{text}</h1>
            {
              subtitle && <SectionSubTitle subtitle={subtitle} />
            }
          </>
      }


    </div>
  );
};