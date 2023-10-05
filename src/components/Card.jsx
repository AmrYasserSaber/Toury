import Image from "next/image";
import Link from "next/link";
import React from "react";
import icon from '@/static/learn-more.svg'

const Card = ({ image = "https://i.ibb.co/brNk15t/Rectangle-10.png", subTitle = "The first planet in the solar system", title = 'Space sightseeing', link = 'https://www.google.com' }) => {
    return (
        <div className="flex flex-col max-w-[379px] px-4 min-h-[516px]  rounded-3xl pt-4 pb-[35px] text-black" style={{ boxShadow: "0px 0.25px 5px 0px #00000040" }}>
            <Image src={image} className=" rounded-3xl mb-[22px]" width={347} height={272} />
            <h5 className="font-semibold text-[29px] mb-2">{title}</h5>
            <p className="mb-4 text-xl text-[ #121212;]">{subTitle}</p>
            <Link className="text-2xl leading-[28.8px] font-bold flex items-center gap-3" href={link}>
                Learn more <Image src={icon} width={40} height={40} />
            </Link>
        </div>
    );
};

export default Card;
