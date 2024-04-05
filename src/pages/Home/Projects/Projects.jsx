
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import "./index"



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './styles.css';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Container from '../../../components/Shared/Container';
import { usePortfolioData } from '../../../hooks/usePortfolioData';
import { filterEnabledTrue } from '../../../api/utils';
import { TextBackdrop } from '../../../components/ui/TextBackdrop/TextBackdrop';
import { Heading } from '../../../components/Shared/Title&Description/Heading';
import { useState } from 'react';

import { Overlay } from './Overlay';
import { Link } from 'react-router-dom';





export default function Projects() {

    const { projects } = usePortfolioData()
    const projectData = filterEnabledTrue(projects)
    const [isHovered, setIsHovered] = useState('')




    return (
        <Container style={'pb-24 z-10'}>
            <TextBackdrop position={'-left-20 lg:left-11 -top-44'} text={'Projects'} />
            <Heading
                position={'center'}
                text={'Projects I Built'}
                subtitle={'My case'}
            />
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                // centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="relative"
            >
                {
                    projectData?.map(project => {
                        const { liveurl, githuburl, title, sequence, image, description, techStack, _id, enabled } = project || {};
                        return (
                            


                                <SwiperSlide
                                key={image?.public_id}
                                    onMouseEnter={() => setIsHovered(image?.url)}
                                    onMouseLeave={() => setIsHovered(null)}
                                >
                                    <img className='w-full h-full object-cover' src={image?.url} />


                                    <Overlay
                                        isHovered={isHovered}
                                        image={image}
                                        title={title}
                                        description={description}
                                        _id={image?.public_id}
                                    />



                                </SwiperSlide>
                            
                        )
                    }
                    
                    )
                }
            </Swiper>


        </Container>
    );
}
