import Link from "next/link";
import React from "react";

const LandingHero = () => {
    return (
        <div className="flex pl-[128px] pb-[190px] pt-[110px] w-full bg-cover h-[696px] bg-[url('/register.jpg')] flex-col justify-center text-white">
            <h1 className="font-semibold w-[745px] text-7xl mb-3 leading-[86px]">
                Explore all you want about <span className="text-project-orange">space</span>
                </h1>
            <h6 className="text-xl mb-9 w-[468px]">He all you wat about space Plan, explore and learn more about solar system</h6>
            <Link
                href="#"
                className="flex justify-center items-center bg-project-orange h-[57px] transition-colors
                           text-2xl text-white rounded-[5px] w-[182px] hover:bg-orange-800"
            >
                Explore Now
            </Link>
        </div>

    );
};

export default LandingHero;
