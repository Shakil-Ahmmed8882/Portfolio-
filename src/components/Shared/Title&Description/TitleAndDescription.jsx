import { Description } from "./Description";
import { Title } from "./Title";

export const TitleAndDescription = ({title,description,position}) => {
  return (
    <div className={`text-${position}`}>
    <Title text={title}/>
    <Description text={description}/>
    </div>
  );
};