"use client";
import React, { useEffect, useState } from "react";
import appwriteService from "@/appwrite/config";
import conf from "@/conf/config";
import PlanetHero from "@/components/PlanetHero";
import Link from "next/link";
import Image from "next/image";
import Articles from "@/components/Articles";

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
            <h3 className="bg-black flex justify-center items-center text-white text-[50px] font-semibold h-[269px] w-full">No Known Moons</h3>
            <script>console.log(planetData.name);</script>
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
            <div className="flex flex-col px-[128px] gap-16 w-full max-w-[1440px]">
                    <h2 className="text-[50px] font-semibold text-black">Content</h2>
                    {planetData.planetContent[0].body.map((content, index) => {
                        let contentArray = content.split("|||")
                        let title = contentArray[0]
                        let unorderedContent = contentArray.slice(1, contentArray.length - 1);
                        if (index === 1) {
                            return (
                                <>
                                <p className="text-2xl text-black">
                                    {`${index+1}. ${title}`}
                                    <ul className=" list-disc pl-9">{unorderedContent.map((i) => <li>{i}</li>)}</ul>
                                </p>
                                <iframe width="100%" height="561" className="rounded-3xl"
                                src={fixVideo(planetData.planetContent[0].video)}>
                                </iframe>
                                </>
                            )
                        } else if (index !== planetData.planetContent[0].body.length - 1) {
                            return (<p className="text-2xl text-black">
                            {`${index+1}. ${title}`}
                            <ul className=" list-disc pl-9">{unorderedContent.map((i) => <li>{i}</li>)}</ul>
                    </p>)
                        } else {
                            return (
                                <div className="flex gap-6">
                                    <Image width={585} height={540} src={planetData.planetContent[0].photo[0]} className={photoClass} />
                                    <div className="text-black">
                                        <h4 className="text-[41px] text-black font-semibold mb-12">{title}</h4>
                                        <ul className=" list-disc pl-6">{unorderedContent.map((i) => <li className="leading-9 text-2xl">{i}</li>)}</ul>
                                    </div>
                                </div>
                            )
                        }
                    })}
                    <div className="flex gap-2.5 mt-[100px] mb-[247px]">
                        {planetData.planetContent[0].photo.slice(1).map((i) => <Image width={587} height={435} src={i} className={photoClass} />)}
                    </div>
            </div>
            <div className="h-[696px] w-full" style={{background: `url(${fixImage(planetData.footerPhoto)})`,backgroundSize:"cover"}}></div>
            <Articles />
        </div>
    );
}
