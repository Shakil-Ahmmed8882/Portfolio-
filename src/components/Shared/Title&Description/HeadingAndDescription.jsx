import { Description } from "./Description";
import { Heading } from "./Heading";

export const HeadingAndDescription = ({title,description,style}) => {
  return (
    <div className={` py-3 ${style}`}>
    <Heading type={'h1'} text={title}/>
    <Description text={description}/>
    </div>
  );
};