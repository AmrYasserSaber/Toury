// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
import {Virtual, Navigation, Pagination} from 'swiper/modules';

import Image from "next/image";
import earth from "@/static/planets/earth.png";
import mars from "@/static/planets/mars.png";
import previous from "@/static/planets/previous.svg";
import next from "@/static/planets/next.svg";

// Import Swiper styles
import 'swiper/css';
import {useRef} from 'react';

const Carousel = (planets) => {
    const swiperRef = useRef();
    return (
        <div className='relative h-[274px] w-full max-w-[1002px]'>
            <button className='w-[74px] h-[74px] bg-transparent absolute top-[40%] z-[999]'
                    onClick={() => swiperRef.current?.slidePrev()}><Image src={previous} className='w-[74px] h-[74px]'/>
            </button>
            <Swiper
                modules={[Virtual, Navigation, Pagination]}
                style={{paddingLeft: "120px"}}
                slidesPerView={3}
                centeredSlides={true}
                navigation={true}
                initialSlide={1}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {planets.planets.planets.map((planet, index) => (
                    <SwiperSlide key={index}>
                        <Image src={planet.photo} className='w-[274px] h-[274px] mr-10' width={2250}
                               height={1390}/>
                    </SwiperSlide>
                ))}
            </Swiper>
            <button className='w-[74px] h-[74px] bg-transparent absolute top-[40%] z-[999] right-0'
                    onClick={() => swiperRef.current?.slideNext()}><Image src={next} className='w-[74px] h-[74px]'/>
            </button>
        </div>
    );
};

Carousel.displayName = 'Carousel';
export default Carousel