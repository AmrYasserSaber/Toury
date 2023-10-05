import Link from "next/link";
import React, { useState } from "react";
import ActivitiesTab from "./ActivitiesTab";
import HotelsTab from "./HotelsTab";
import building from "@/static/building.svg";
import Image from "next/image";

let activeClass = "flex justify-center items-center w-[186px] h-[72px] gap-3 text-white text-[29px] font-semibold bg-[#2B314C]";
let unActiveCLass = "flex justify-center items-center w-[186px] h-[72px] gap-3 text-white text-[29px] font-semibold bg-[#2B314C66]"

const Tabs = () => {
    const [active, setActive] = useState("Activities")
    return (
        <div className="flex flex-col items-center">
            <div className="w-[1185px] flex gap-x-[3px] border-b-2 border-b-[#808080]">
                <button onClick={() => setActive("Activities")} className={active === "Activities" ?
                    activeClass : unActiveCLass}>
                    <Image src={building} width={22} height={24} /> Activities
                </button>
                <button onClick={() => setActive("Hotels")} className={active === "Hotels" ?
                    activeClass : unActiveCLass}>
                    <Image src={building} width={22} height={24} /> Hotels
                </button>
            </div>
            {active && active === "Activities" && <ActivitiesTab /> }
            {active && active === "Hotels" && <HotelsTab /> }
        </div>

    );
};

export default Tabs;
