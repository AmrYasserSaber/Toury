"use client";

import useAuth from "@/context/useAuth";
import React, {useEffect, useRef, useState} from "react";
import LandingHero from "@/components/LandingHero";
import LandingCarousel from "@/components/LandingCarousel";
import planets from "@/components/Planets";
import conf from "@/conf/config";
import appwriteService from "@/appwrite/config";
import Articles from "@/components/Articles";
import Card from "@/components/Card";
import HotelCard from "@/components/HotelCard";
import HotelsTab from "@/components/HotelsTab";
import ActivitiesTab from "@/components/ActivitiesTab";
import Tabs from "@/components/Tabs";
import PlanetHero from "@/components/PlanetHero";
import FlightCard from "@/components/FlightCard";
import ButtonCard from "@/components/ButtonCard";


const Test = () => {
    const {authStatus} = useAuth();
    const [planets, setPlanets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        async function fetchData() {
            try {
                const collectionId = conf.appwritePlanetsId;
                const databaseId = conf.appwriteDatabaseId;
                const data = await appwriteService.getCollectionDocuments(databaseId, collectionId);
                setPlanets(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        fetchData().then(r=>r);
    }, []);
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
            <LandingHero/>
            <PlanetHero />
            <LandingCarousel planets={planets.documents}/>
            <ActivitiesTab/>
            <HotelsTab />
            <Tabs />
            <div className="flex gap-[15px]">
                <FlightCard />
                <ButtonCard />
            </div>
            

        </>
    );
}

export default Test;