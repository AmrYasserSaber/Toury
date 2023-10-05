import Link from "next/link";
import React from "react";
import HotelCard from "./HotelCard";

let hotels = [
    { image : "https://i.ibb.co/brNk15t/Rectangle-10.png", title : 'Dream hotel', link : 'https://www.google.com',price : 2000, days : 7, stars : 5 },
    { image : "https://i.ibb.co/540Mngd/Rectangle-8.png", title : 'World\'s hotel', link : 'https://www.google.com',price : 2000, days : 7, stars : 3 },
    { image : "https://i.ibb.co/brNk15t/Rectangle-10.png", title : 'Potato hotel', link : 'https://www.google.com',price : 2000, days : 7, stars : 2 }
]

const HotelsTab = ({items = hotels}) => {
    return (
        <div className="mt-[34px]">
            <h3 className="text-[29px] text-[#00000099] mb-8">{items.length} results</h3>
            <div className="flex max-w-[1185px] justify-between w-full gap-4">
                {items.map((a) => <HotelCard image={a.image} days={a.days} price={a.price} link={a.link} stars={a.stars} title={a.title}/>)}
            </div>
        </div>

    );
};

export default HotelsTab;
