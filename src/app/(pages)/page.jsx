"use client";

import useAuth from "@/context/useAuth";
import React from "react";
import ProfileCard from "@/components/ProfileCard";
import Login from "@/components/Login";
import PlanetHero from "@/components/PlanetHero";
import LandingHero from "@/components/LandingHero";
import Carousel from "@/components/Carousel";

const Home = () => {
const {authStatus} = useAuth();
return (
    <>
    <Carousel />
    <LandingHero />
    <PlanetHero />
    </>
);
}

export default Home;