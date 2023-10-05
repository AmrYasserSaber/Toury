import Image from "next/image";
import Link from "next/link";
import React from "react";
import icon from '@/static/learn-more.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const HotelCard = ({ image = "https://i.ibb.co/brNk15t/Rectangle-10.png", title = 'Dream hotel', link = 'https://www.google.com',price = 2000, days = 7, stars = 5 }) => {
    return (
        <div className="h-[616px] w-[385px] flex flex-col" >
            <Image src={image} className=" rounded-[10px] mb-4" width={385} height={395} />
            <div className="flex w-full justify-between">
                <h3 className="text-black font-semibold text-[29px]">{title}</h3>
                <div className="flex flex-col ">
                    <h4 className="text-[34px] text-black font-semibold">{price} <span className="text-[14px]">USD</span></h4>
                    <span className="text-[14px] font-semibold text-black">{days} Days</span>
                </div>
            </div>
            <div className="flex gap-1 items-center mb-8">
                {[...Array(Math.ceil(stars))].map((star) => <FontAwesomeIcon icon={faStar} color="#ffc107" />)}
                {(5 - Math.ceil(stars)) && [...Array((5 - Math.ceil(stars)))].map((star) => <FontAwesomeIcon icon={faStar} color="#808080" />)}
                <p className="text-xl text-black">({Math.ceil(stars)}.0)</p>
            </div>
            <Link className="w-full flex justify-center items-center bg-orange-500 text-white h-[101px] hover:bg-orange-800 
                                       transition-colors text-[29px] font-semibold rounded-[10px]" href={link}>
                View Hotel
            </Link>
        </div>
    );
};

export default HotelCard;
