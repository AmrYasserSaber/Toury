import Link from "next/link";
import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Virtual, Navigation, Pagination} from 'swiper/modules';
import previous from "@/static/articles/prev-article.svg";
import next from "@/static/articles/next-article.svg";
import 'swiper/css';
import {useRef} from 'react';
import Image from "next/image";

let articles = [
    {title:'What does spending more than a year in space do to the human body?',photo:'https://i.ibb.co/h1q7wLz/Rectangle-9.png', link:"/signup" },
    {title:'Astronomy 101: Fun Facts and Fascinating Discoveries',photo:'https://i.ibb.co/540Mngd/Rectangle-8.png', link:"/signup" },
    {title:'Rocketing Through Space: Discover, Learn, and Explore',photo:'https://i.ibb.co/brNk15t/Rectangle-10.png', link:"/signup" },
    {title:'What does spending more than a year in space do to the human body?',photo:'https://i.ibb.co/h1q7wLz/Rectangle-9.png', link:"/signup" },
    {title:'Astronomy 101: Fun Facts and Fascinating Discoveries',photo:'https://i.ibb.co/540Mngd/Rectangle-8.png', link:"/signup" },
    {title:'Rocketing Through Space: Discover, Learn, and Explore',photo:'https://i.ibb.co/brNk15t/Rectangle-10.png', link:"/signup" }
]

const Articles = ({title = "Articles"}) => {
    const swiperRef = useRef();
    return (
        <div className="px-[128px] py-[66px] text-black mt-[128px] bg-[#CCCCCC] flex flex-col">
            <h3 className="text-center text-[50px] text-black font-semibold">
                {title}
            </h3>
            <div className="flex w-[124px] justify-between mb-9 align self-end">
            <button className='w-[36.64px] h-[36.64px]'
                    onClick={() => swiperRef.current?.slidePrev()}><Image src={previous} className='w-full h-full'/>
            </button>
            <button className='w-[36.64px] h-[36.64px]'
                    onClick={() => swiperRef.current?.slideNext()}><Image src={next} className='w-full h-full'/>
            </button>

            </div>
            <div className="h-[521px] mb-auto">
            <Swiper
                modules={[Virtual, Navigation, Pagination]}
                spaceBetween={15}
                slidesPerView={3}
                
                navigation={true}
                initialSlide={1}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {articles.map((article, index) => (
                    <SwiperSlide key={index} style={{alignSelf:"flex-start"}}>
                        <Link href={article.link}>
                        <Image src={article.photo} className='mr-10' width={385}
                               height={324}/>
                               <p className="mt-[22px] text-[29px] max-w-[385px] leading-[34.8px] text-black font-semibold">{article.title}</p>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>
        </div>

    );
};

export default Articles;
