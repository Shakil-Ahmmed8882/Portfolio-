import gsap from "gsap";
import { filterEnabledTrue } from "../../../api/utils";
import Container from "../../../components/Shared/Container";
import { Heading } from "../../../components/Shared/Title&Description/Heading";
import { TextBackdrop } from "../../../components/ui/TextBackdrop/TextBackdrop";
import { usePortfolioData } from "../../../hooks/usePortfolioData";
import { Card } from "./card";

export const Services = () => {

    const { services } = usePortfolioData()
    const data = filterEnabledTrue(services)

    //     const distanceData  = [88, 200, 300, 140, 40, 210, 190, 155, 80, 58, 227];

    //     const slider = useRef()


    //     let tl = gsap.timeline({
    //         defaults:{
    //             ease:'none'
    //         },
    //         scrollTrigger:{
    //             trigger:slider,
    //             pin:true,
    //             scrub:2,
    //             end: () => "+=" +  slider.offsetWidth
    //         }
    //     })
    // // https://www.youtube.com/watch?v=Mg3YT5TKNG4  ( 11: 34)


    return (
        <Container>
            <div className="relative my-28 z-10">


                <TextBackdrop position={'left-0 -top-40'} text={'Services'} />
                <Heading
                    position={'center'}
                    text={'What I do'}
                    subtitle={'My Services'}
                />
            </div>


            <section className="grid relative z-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 items-start gap-8 ">
                {data?.map((service, index) => <Card key={index} service={service} />)}
            </section>





            {/* <div className="outer overflow-x-hidden">
                <div ref={slider} className="slider flex w-[300vw]">
                    {[1,2,3].map((section,sectNumber)=> (
                               <section className="h-screen w-full">
                               <div className="inner relative flex h-full items-end">
                                   <div className="content">
                                       <h1>Luminish fiseh {sectNumber + 1}</h1>
                                       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora necessitatibus vero pariatur velit facilis maxime soluta ullam beatae recusandae aspernatur asperiores mollitia, non corrupti dolorum animi iure quas. Dolore, nesciunt.</p>
                                   </div>
                               </div>
       
                           </section>
                    ))}
                </div>
            </div> */}


            {/* Fixed fish */}
            {/* <div className="fish-container ">

                {data?.map((img,index) => <img
                
                className="absolute w-80 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                distance-data={distanceData[index]} src={img.image.url} alt="" />)}
            </div> */}
        </Container>
    );
};

