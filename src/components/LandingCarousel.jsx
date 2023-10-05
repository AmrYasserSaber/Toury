import Link from "next/link";
import React from "react";
import Carousel from "./Carousel";

const LandingCarousel = (planets) => {
    return (
        <div className="flex pb-[82px] pt-[82px] w-full bg-cover h-[554px] bg-[url('/carousel-image.png')] flex-col justify-center text-black items-center justify-center">
            <h2 className="font-semibold w-[745px] text-[50px] mb-3 leading-[86px] text-center">
            Choose your destination
                </h2>
            <Carousel planets={planets}/>
        </div>

    );
};

export default LandingCarousel;
