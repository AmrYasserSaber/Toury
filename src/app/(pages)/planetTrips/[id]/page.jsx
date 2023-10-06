"use client";
import React, {useEffect, useState} from "react";
import appwriteService from "@/appwrite/config";
import conf from "@/conf/config";
import PlanetHero from "@/components/PlanetHero";
import Link from "next/link";
import Image from "next/image";
import Articles from "@/components/Articles";
import ActivitiesTab from "@/components/ActivitiesTab";
import Tabs from "@/components/Tabs";
import FlightCard from "@/components/FlightCard";
import ButtonCard from "@/components/ButtonCard";

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
    return link.replace("watch?v=", "embed/")
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
            <PlanetHero title={`${planetData.name} Planet`} image={fixImage(planetData.photo)} active={false}/>
            {
                planetData.moons.length > 0 ?
                    <div className="bg-black h-[269px] w-full flex flex-col items-center px-[273px] pt-[22px]">
                        <p className="text-2xl text-project-gray">The most important moons</p>
                        <div className="bg-black h-[269px] w-full flex items-center justify-evenly">
                            {planetData.moons.map((moon) =>
                                <div className="flex flex-col items-center justify-center">
                                    <Image src={moon.photo} width={122} height={122}/>
                                    <p className="text-white font-semibold text-[29px]">{moon.name}</p>
                                </div>
                            )}
                        </div>
                    </div>
                    :
                    <h3 className="bg-black flex justify-center items-center text-white text-[50px] font-semibold h-[269px] w-full">No
                        Known Moons</h3>
            }

            <div className="flex flex-col px-[128px] gap-16 w-full max-w-[1440px] mb-40" id="content">
                <h2 className="text-[50px] font-semibold text-black mt-10">Flight</h2>
                <div className="flex gap-[15px]">
                    <FlightCard/>
                    <ButtonCard text={"Complete"}/>
                </div>
                <h5 className="text-[35px] font-semibold text-black mt-10">Description</h5>
                <div className="flex flex-col px-[128px] w-full max-w-[1440px] mr-0">
                    <h8 className="text-[35px] font-semibold text-black mr-0">Space flight is the act of traveling
                        beyond Earth's atmosphere and into outer space using
                        specially designed spacecraft. It involves the use of rockets to overcome Earth's gravitational
                        pull and reach the vacuum of space. Space flight serves various purposes, including scientific
                        exploration, satellite deployment, space station maintenance, and human space travel. It has
                        revolutionized our understanding of the universe and has led to technological advancements that
                        benefit both space exploration and life on Earth.
                    </h8>
                </div>

            </div>
            <Tabs/>
            <div className="mb-14"></div>
        </div>
    );
}
