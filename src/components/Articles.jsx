import Link from "next/link";
import React, {useEffect, useState} from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Virtual, Navigation, Pagination} from 'swiper/modules';
import previous from "@/static/articles/prev-article.svg";
import next from "@/static/articles/next-article.svg";
import 'swiper/css';
import {useRef} from 'react';
import Image from "next/image";
import conf from "@/conf/config";
import appwriteService from "@/appwrite/config";



const Articles = (home) => {
    const [articles, setArticles] = React.useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const collectionId = conf.appwritePlanetsArticlesId;
                const databaseId = conf.appwriteDatabaseId;
                const data = await appwriteService.getCollectionDocuments(databaseId, collectionId);
                console.log(data)
                setArticles(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false); // Set loading to false when fetching is done
            }
        }
        fetchData().then(r => r); // Just call fetchData directly
    }, []);
    const swiperRef = useRef();
    if(!articles|| !articles.documents){return(<></>)}
    return (
        <div id="articles" className="px-[128px] py-[66px] text-black mt-[128px] bg-[#CCCCCC] flex flex-col mb-[232px] w-full items-center">
            <h3 className="text-center text-[50px] text-black font-semibold max-w-[1185px]">
                Articles
            </h3>
            <div className="flex w-[124px] justify-between mb-9 align self-end max-w-[1185px]">
                <button className='w-[36.64px] h-[36.64px]'
                        onClick={() => swiperRef.current?.slidePrev()}><Image src={previous} className='w-full h-full'/>
                </button>
                <button className='w-[36.64px] h-[36.64px]'
                        onClick={() => swiperRef.current?.slideNext()}><Image src={next} className='w-full h-full'/>
                </button>

            </div>
            <div className="h-[521px] mb-auto max-w-[1185px]">
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
                    {articles.documents.map((article, index) => (
                        <SwiperSlide key={index} style={{alignSelf: "flex-start"}}>
                                <Image src={article.thumbnail} className='mr-10' width={385}
                                       height={324}/>
                                <p className="mt-[22px] text-[29px] max-w-[385px] leading-[34.8px] text-black font-semibold">{article.name}</p>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>

    );
};

export default Articles;
