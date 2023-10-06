import Link from "next/link";
import React from "react";

const PlanetHero = ({ title = "Mercury Planet",id="651da6d96ae7f719bcaa", image="https://i.ibb.co/pR3K3zm/hero-image.png",active=true }) => {
    return (
        <div className="flex w-full bg-cover h-[696px] flex-col justify-center items-center text-whiter" style={{background: `url(${image})`,backgroundSize:"cover"}}>
            <h1 className="font-semibold text-7xl mb-9">{title}</h1>
            {active?            <Link
                href={`/availableFlights/${id}`}
                className="flex justify-center items-center bg-project-orange h-[100px] transition-colors
                                   text-[29px] text-white rounded-[5px] w-[250px] hover:bg-orange-800"
            >
                Book a plan
            </Link> : <></>}

        </div>

    );
};

export default PlanetHero;
