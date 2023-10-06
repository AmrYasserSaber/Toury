"use client";
import React, { useEffect, useState } from "react";
import appwriteService from "@/appwrite/config";
import conf from "@/conf/config";
import PlanetHero from "@/components/PlanetHero";
import Link from "next/link";
import Image from "next/image";
import Articles from "@/components/Articles";
import ActivitiesTab from "@/components/ActivitiesTab";
import Tabs from "@/components/Tabs";

const activeLink = "text-2xl text-black";
const inActiveLink = "text-2xl text-[#969696]"
const photoClass = "rounded-3xl"

const fixImage = (link) => {
    const base = "https://drive.google.com/uc?export=view&id=";
    const url = link
    // Extract the ID from the URL
    const startIndex = url.indexOf("/d/") + 3;
    const endIndex = url.indexOf("/view");
    const id = url.substring(startIndex, endIndex);

    const result = base + id
    return result
}

const fixVideo = (link) => {
    return link.replace("watch?v=","embed/")
}

export default function PlanetProfile(params) {
    const [planetData, setPlanetData] = useState(null);
    const [active, setActive] = useState("Overview")
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        async function fetchData() {
            try {
                const collectionId = conf.appwritePlanetsId;
                const databaseId = conf.appwriteDatabaseId;
                const data = await appwriteService.getDocument(databaseId, collectionId, params.params.id);
                setPlanetData(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false); // Set loading to false when fetching is done
            }
        }

        fetchData().then(r => r); // Just call fetchData directly
    }, [params.params.id]);


    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }


    return (
        <div className="flex flex-col items-center">
            <PlanetHero title={`${planetData.name} Planet`} image={fixImage(planetData.photo)} />
            {
                planetData.moons.length > 0 ?
                <div className="bg-black h-[269px] w-full flex flex-col items-center px-[273px] pt-[22px]">
                    <p className="text-2xl text-project-gray">The most important moons</p>
                    <div className="bg-black h-[269px] w-full flex items-center justify-evenly">
                    {planetData.moons.map((moon) =>
                        <div className="flex flex-col items-center justify-center">
                            <Image src={moon.photo} width={122} height={122} />
                            <p className="text-white font-semibold text-[29px]">{moon.name}</p>
                        </div>
                    )}
                    </div>
                </div>
                 : <h3 className="bg-black flex justify-center items-center text-white text-[50px] font-semibold h-[269px] w-full">No Known Moons</h3>
            }
            <div className="flex px-[128px] gap-16 mt-[84px]">
                <div className="h-[376px] w-[285px] flex flex-col py-16 rounded-3xl gap-y-[50px] border items-center" style={{ boxShadow: "0px 0.25px 5px 0.25px rgba(0, 0, 0, 0.25)" }}>
                    <Link href="#overview" onClick={() => setActive("Overview")} className={active === "Overview" ? activeLink : inActiveLink} >Overview</Link>
                    <Link href="#content" onClick={() => setActive("Content")} className={active === "Content" ? activeLink : inActiveLink} >Content</Link>
                    <Link href="#articles" onClick={() => setActive("Articles")} className={active === "Articles" ? activeLink : inActiveLink} >Articles</Link>
                </div>
                <div className="flex flex-col max-w-[727px] mb-[128px]" id="overview">
                    <h2 className="text-black text-[50px] mb-8">Overview</h2>
                    <p className="text-2xl text-black mb-8 leading-9">{planetData.overview}</p>
                    <div className="flex w-full justify-between">
                        <div className="flex flex-col">
                            <p className="text-2xl text-[#808080]">Moons:</p>
                            <p className="text-7xl text-project-orange flex items-center">{planetData.moons_number} <span className="text-2xl inline-block ml-5">known moons</span> </p>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-2xl text-[#808080]">One year:</p>
                            <p className="text-7xl text-project-orange flex items-center">{planetData.year} <span className="text-2xl inline-block ml-5">Earth's days</span> </p>
                        </div>
                    </div>
                </div>
            </div>
            <Tabs/>
            <div className="mb-14"></div>
        </div>
    );
}
