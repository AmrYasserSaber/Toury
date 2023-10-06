import Image from "next/image";
import Link from "next/link";
import React from "react";
import icon from '@/static/plane.svg'


const FlightCard = ({ image = "https://i.ibb.co/tHVg4jy/nasa-logo-e03e4551-2.png", startTime = "12:00" , endTime= "18:00", hours = 6 }) => {
    return (
        <div className="flex w-[785px] h-[185px] items-center pt-[60.93] rounded-3xl text-black justify-center" style={{ boxShadow: "0px 0.25px 5px 0px #00000040" }}>
            <div className="max-w-[557px] justify-between w-full flex">
            <Image src={image} className=" rounded-3xl mb-[22px]" width={156} height={88} />
            <div className="flex items-center">
            <h6 className="text-[29px] text-black font-semibold mr-2.5">{startTime}</h6>
                <div className="flex flex-col w-16 mr-2 mb-[21px]">
                    <p className="text-[14px] text-[#707070] text-center">{hours} hours</p>
                    <div className="w-[64px] h-[1px] bg-black"></div>
                </div>
                <Image src={icon} className="mb-[3px]" width={24} height={24} />
                <h6 className="text-[29px] text-black font-semibold mr-2.5">{endTime}</h6>
            </div>
            </div>
        </div>
    );
};

export default FlightCard;
