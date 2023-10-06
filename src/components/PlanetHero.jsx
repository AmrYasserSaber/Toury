import Link from "next/link";
import React from "react";

const PlanetHero = ({ title = "Mercury Planet", subtitle = "The first planet in the solar system", image="https://i.ibb.co/pR3K3zm/hero-image.png" }) => {
    return (
        <div className="flex w-full bg-cover h-[696px] flex-col justify-center items-center text-whiter" style={{background: `url(${image})`,backgroundSize:"cover"}}>
            <h1 className="font-semibold text-7xl mb-9">{title}</h1>
            <h6 className="text-xl mb-9">{subtitle}</h6>
            <Link
                href="#"
                className="flex justify-center items-center bg-project-orange h-[100px] transition-colors
                                   text-[29px] text-white rounded-[5px] w-[250px] hover:bg-orange-800"
            >
                Get a plan
            </Link>
        </div>

    );
};

export default PlanetHero;
