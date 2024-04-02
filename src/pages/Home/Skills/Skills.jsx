import { filterEnabledTrue } from "../../../api/utils";
import Container from "../../../components/Shared/Container";
import { Heading } from "../../../components/Shared/Title&Description/Heading";
import { TextBackdrop } from "../../../components/ui/TextBackdrop/TextBackdrop";
import { usePortfolioData } from "../../../hooks/usePortfolioData";
import { Card } from "./card";

export const Skills = () => {

    const {skills} = usePortfolioData()
    const data = filterEnabledTrue(skills)


    console.log(data)


    return (
        <Container style={'py-32 z-10'}>
         
            


            <TextBackdrop position={'left-0 lg:left-56 -top-14'} text={'Skills'} />
            <Heading
                    position={'center'}
                    text={'PROFESSIONAL SKILLS'}
                    subtitle={'My skills'}
                />




<section className="w-full py-12 md:py-24   border-[#8080804e]">
      <div className="grid relative z-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 items-start gap-8 ">
       
       {
        data?.map(skill => <Card key={skill._id} skill={skill}/>)
       }
      </div>
    </section>
        </Container>
    );
};

