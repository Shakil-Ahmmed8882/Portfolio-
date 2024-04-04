import React, { useEffect, useState, useRef } from "react";
import { filterEnabledTrue } from "../../../api/utils";
import Container from "../../../components/Shared/Container";
import { Heading } from "../../../components/Shared/Title&Description/Heading";
import { TextBackdrop } from "../../../components/ui/TextBackdrop/TextBackdrop";
import { usePortfolioData } from "../../../hooks/usePortfolioData";
import { Card } from "./card";
import gsap from "gsap";
import { useScrollIntoView } from "../../../hooks/useScrollIntoView";

export const Skills = () => {
    const { skills } = usePortfolioData();
    const data = filterEnabledTrue(skills);
    const [isShowAll, setIsShowAll] = useState(false);
    const skillsRef = useRef(null);

    const toggleShowAll = () => {
        setIsShowAll(prevState => !prevState);
    };

    // GSAP animation 
    useEffect(()=> {
        const timeline = gsap.timeline({defaults:{duration:1}})
        timeline.fromTo('.skills',{opacity:0,y:'-100px'},{opacity:1,y:0})
    },[isShowAll])
    

    // Scroll into the skill view when showo all or less
    useScrollIntoView({ reference: skillsRef, active: isShowAll });




    return (
        <Container style={'pt-32 pb-11 z-30'}>
            <TextBackdrop position={'left-0 lg:left-56 -top-14'} text={'Skills'} />
            <Heading
                position={'center'}
                text={'PROFESSIONAL SKILLS'}
                subtitle={'My skills'}
            />
            <section ref={skillsRef} className="skills w-full py-12 md:py-24 border-[#8080804e]">
                <div className="grid relative z-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 items-start gap-8 ">
                {data && data.slice(isShowAll ? 0 : 0, isShowAll ? data.length : 6).map(skill => <Card key={skill._id} skill={skill} />)}
                </div>
                <div className="text-center pt-11">
                    <button onClick={toggleShowAll} className=" px-6 py-2 bg-primary-color rounded-lg">
                        {isShowAll ? "Show Less" : "View All"}
                    </button>
                </div>
            </section>
        </Container>
    );
};