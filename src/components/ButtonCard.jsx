import Image from "next/image";
import Link from "next/link";
import React from "react";
import icon from '@/static/plane.svg'


const ButtonCard = ({price = 550, link = "/" ,text="View Details"}) => {
    return (
        <div className="flex w-[385px] h-[179px] flex-col items-center pt-[60.93] rounded-3xl text-black justify-center px-[120px]" style={{ boxShadow: "0px 0.25px 5px 0px #00000040" }}>
            <p className="text-xl text-project-gray self-start">Price</p>
            <h6 className="text-[29px] text-black self-start font-semibold">{price} <span className="inline-block text-[14px] ml-3">USD</span></h6>
            <Link
                href={link}
                className="flex justify-center items-center bg-project-orange h-[57px] transition-colors
                           text-xl text-white rounded-[5px] w-[145px] hover:bg-orange-800 max-w-2xl"
            >
                {text}
            </Link>
        </div>
    );
};

export default ButtonCard;
