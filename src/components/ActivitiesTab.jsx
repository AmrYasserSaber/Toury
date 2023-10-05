import Link from "next/link";
import React from "react";
import HotelCard from "./HotelCard";
import Card from "./Card";

let activiteis = [
    { image: "https://i.ibb.co/brNk15t/Rectangle-10.png", subTitle: "The first planet in the solar system", title: 'Space sightseeing', link: 'https://www.google.com', price: 2000, days: 7, stars: 5 },
    { image: "https://i.ibb.co/540Mngd/Rectangle-8.png", subTitle: "The first planet in the solar system", title: 'World\'s hotel', link: 'https://www.google.com', price: 2000, days: 7, stars: 3 },
    { image: "https://i.ibb.co/brNk15t/Rectangle-10.png", subTitle: "The first planet in the solar system", title: 'Potato hotel', link: 'https://www.google.com', price: 2000, days: 7, stars: 2 },
    { image: "https://i.ibb.co/540Mngd/Rectangle-8.png", subTitle: "The first planet in the solar system", title: 'World\'s hotel', link: 'https://www.google.com', price: 2000, days: 7, stars: 3 },
    { image: "https://i.ibb.co/brNk15t/Rectangle-10.png", subTitle: "The first planet in the solar system", title: 'Potato hotel', link: 'https://www.google.com', price: 2000, days: 7, stars: 2 }
]

const ActivitiesTab = ({items = activiteis}) => {
    return (
        <div className="mt-[34px]">
            <h3 className="text-[29px] text-[#00000099] mb-8">{items.length} results</h3>
            <div className="flex max-w-[1175px] gap-x-[19px] flex-wrap gap-y-[50px]">
                {items.map((a) => <Card title={a.title} image={a.image} subTitle={a.subTitle} link={a.link} />)}
            </div>
        </div>

    );
};

export default ActivitiesTab;
