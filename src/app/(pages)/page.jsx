"use client";

import useAuth from "@/context/useAuth";
import React from "react";
import ProfileCard from "@/components/ProfileCard";
import Login from "@/components/Login";
import PlanetHero from "@/components/PlanetHero";
import LandingHero from "@/components/LandingHero";
import Carousel from "@/components/Carousel";
import LandingCarousel from "@/components/LandingCarousel";

const Home = () => {
const {authStatus} = useAuth();
return (
    <>
    <LandingHero />
    <PlanetHero />
    <LandingCarousel />
    </>
);
}

export default Home;