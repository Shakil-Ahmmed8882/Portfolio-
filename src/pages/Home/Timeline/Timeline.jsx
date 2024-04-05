


import { useEffect, useState } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import Container from "../../../components/Shared/Container";
import { animateTimelineCards } from './animateTimelineCards';
import { usePortfolioData } from '../../../hooks/usePortfolioData';
import { filterEnabledTrue } from '../../../api/utils';
import { LoaderIcon } from 'react-hot-toast';
import { BulletPoint } from './BulletPoints';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Accordian } from './Accordian';

// arrow icons 
import { MdArrowLeft } from "react-icons/md";



export const Timeline = () => {


    const { timeline, isLoading } = usePortfolioData()
    const [activeIndex, setActiveIndex] = useState(null);

    useEffect(() => {
        if (!isLoading) animateTimelineCards();
    }, [isLoading]);

    if (isLoading) return <LoaderIcon className='w-80 h-80 mx-auto text-8xl' />;

    const data = filterEnabledTrue(timeline);


    return (
        <Container>
            <div className="px-4 scale-90  py-8 space-y-11 md:space-y-24">
                {data.map((item, index) => (
                    <div className={`${index % 2 == 0 && 'md:ml-[30%] lg:ml-[40%]'}
                w-full  timeline-card relative   `}>
                        <div className="" />
                        <div className={`z-10 md:z-20 flex  ${index % 2 == 1 ?
                            'md:right-[23%] lg:right-[33%]' : '-left-24'} 
                    top-0 items-center order-1 md:bg-primary-color shadow-xl
                     absolute   w-28 h-28 md:w-12 md:h-12 rounded-full`}>

                            <h1 className="mx-auto font-semibold text-lg text-white
                         md:block hidden">{index + 1}</h1>
                        </div>
                        <div className={`order-1 relative ${activeIndex === index ? 'pb-8' : ''} 
                    z-10 bg-gradient-to-r from-[#1e1831] to-[#19152ca5] rounded-lg shadow-xl md:w-8/12 lg:w-7/12 px-6 py-6`}>
                            <h3 className="mb-3 font-bold text-white text-2xl lg:text-3xl">{item.company_name}</h3>
                            <p className='text-[#ececec] md:text-[17px] lg:text-[19px] py-1 mb-3  flex gap-2 items-center'><FaLocationDot className='text-[#ff5b92]' /> {item.jobLocation}</p>
                            <p className="text-[#bbbbbb] text-title leading-7 md:text-[21px]">{item.summary ? item.summary : 'Hellow world good to see you. It is pleasure to be with all of you. I appreciate your glorious applouse. '}</p>
                            <button onClick={() => setActiveIndex(activeIndex === index ? null : index)} className={`text-1xl ${activeIndex === index ? 'bg-[#7d7d7d5e] mb-8' : 'bg-primary-color'} text-white rounded-sm px-3 py-1 mt-8 transition-all duration-300 flex items-center`}>
                                {activeIndex === index ? 'See less....' : 'See more..'} <MdOutlineKeyboardArrowDown className={`${activeIndex === index ? 'rotate-180' : 'rotate-0'} transition-all duration-300 text-[white] text-2xl`} />
                            </button>
                            <Accordian isActive={activeIndex === index} closedData={item} />
                            <MdArrowLeft className={` text-[#2e2e2ea9] text-9xl absolute ${index % 2 == 1 ?
                                'md:right-[23%] lg:-right-[74px] -top-8 rotate-180' : '-top-7 -left-[75px]'}`} />
                        </div>



                    </div>
                ))}
            </div>
        </Container>
    );
};


