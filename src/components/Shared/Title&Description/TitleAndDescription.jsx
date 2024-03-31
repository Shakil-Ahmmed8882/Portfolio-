import { Description } from "./Description";
import { Title } from "./Title";

export const TitleAndDescription = ({title,description,style}) => {
  return (
    <div className={` py-3 ${style}`}>
    <Title text={title}/>
    <Description text={description}/>
    </div>
  );
};