import { useLoaderData, useParams } from "react-router-dom";
import { filterSingleData } from "../../../api/utils";
import { usePortfolioData } from "../../../hooks/usePortfolioData";
import gsap from "gsap";
import { useEffect } from "react";
import { animateCard } from "./GSAP";

export const ProjectDetails = () => {


    const {id}= useParams()

    
    const {projects} = usePortfolioData()
    const project = filterSingleData(projects,id)

    const {liveurl,githuburl,title,sequence,image,description,techStack,_id,enabled} = project || {}

    // GSAP animation
    useEffect(() => {
        const animationTimeline = animateCard();
        // Cleanup function
        return () => {
            animationTimeline.kill(); 
        };
    }, []);

    return (
        (
            <div className="bg-[#121212] relative  overflow-hidden min-h-screen flex flex-col items-center  text-white p-4">
                <div className="grid grid-cols-1 gap-4 w-full relative">


                    <div
                        className="flex relative min-h-[80px]
                         w-full text-sm  h-[55vh] overflow-hidden bg-[#a6a6a6]   rounded-md"
                    >
                        <img src={image?.url} className="w-full h-full object-cover " alt="" />


                        <div
        style={{backdropFilter:'brightness(1) contrast(1)'}}
        className={`absolute bg-gradient-to-r from-[#000000] to-[#00000048] inset-0
         transition-all duration-500 flex bg-blend-darken cursor-pointer justify-center items-center`}>
        <div className={`'visible opacity-100 translate-y-0 transition-all duration-500  grid space-y-3  text-white p-4 w-full bg-[#0077ff00] rounded-lg  `}>
             <h1 className='text-5xl font-title'>{title}</h1>
             <p className='text-[#cccccc] pt-1 pb-4 text-[18px] w-2/3 leading-8 '>{description?.slice(0,149)}</p>
             
        </div>  
    </div>
                    </div>

                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 px-8 
                w-full mt-8 absolute bottom-20">
                    <div
                        className="rounded-lg card-content h-60 bg-[#2b2b2bbc] "
                    >
                    </div>
                    <div
                        className="rounded-lg card-content h-60 bg-[#2b2b2bbc] "
                    >

                    </div>

                    <div
                        className="rounded-lg card-content h-60  bg-[#2b2b2bbc] "
                    >
                        <div className="p-6">
                            <div className="h-40" />
                        </div>

                    </div>
                </div>



            
            </div>

        )
    );
};
