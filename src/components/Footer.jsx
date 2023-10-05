"use client";
import useAuth from "@/context/useAuth";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import logo from "../static/logo-footer.svg";
import email from "../static/email-footer.svg";
import spacex from "../static/spacex-footer.svg";
import { usePathname } from 'next/navigation';
import instagram from "@/static/social/instagram.svg";
import facebook from "@/static/social/facebook-footer.svg";
import Image from 'next/image';

const firstList =
{
    title: "Pages", pages: [{
        name: "Home",
        href: "/",
    },
    {
        name: "About",
        href: "#",
    },
    {
        name: "News",
        href: "/news",
    },
    {
        name: "Contact us",
        href: "/contact",
    }]
}

const secondList =
{
    title: "Information", pages: [{
        name: "Articles",
        href: "/",
    },
    {
        name: "Solar system",
        href: "#",
    },
    {
        name: "Planets",
        href: "/news",
    },
    {
        name: "Booking hotels",
        href: "/contact",
    }]
}



export default function Footer() {
    return (
        <>
            <div className="w-full pt-6 px-[123px] flex justify-between bg-[#121212]">
                <Image src={logo} className="w-[152px] h-[152px]" />
                <div className="flex flex-col pt-[60px]">
                    <h6 className="text-[29px] text-white mb-[30px]">{firstList.title}</h6>
                    {firstList.pages.map((link) =>
                        <Link
                            href={link.href}
                            className="inline-flex items-center text-2xl text-[#CCCCCC] hover:text-primary mb-5"
                        >
                            {link.name}
                        </Link>
                    )}
                </div>
                <div className="flex flex-col pt-[60px]">
                    <h6 className="text-[29px] text-white mb-[30px] pl-[55px]">Partners</h6>
                    <Image src={spacex} className="w-[251.33px] h-[144.9px]" />
                </div>
                <div className="flex flex-col pt-[60px]">
                    <h6 className="text-[29px] text-white mb-[30px]">{secondList.title}</h6>
                    {secondList.pages.map((link) =>
                        <Link
                            href={link.href}
                            className="inline-flex items-center text-2xl text-[#CCCCCC] hover:text-primary mb-5"
                        >
                            {link.name}
                        </Link>
                    )}
                </div>
                <div className="flex flex-col pt-[60px]">
                    <h6 className="text-[29px] text-white mb-[30px] pl-[54px]">Contacts</h6>
                    <div className="w-[155px] flex gap-[32px] pl-[43px]">
                        <Image src={facebook} className="w-[62px] h-[62px]" />
                        <Image src={instagram} className="w-[62px] h-[62px]" />
                    </div>
                    <div className="h-14 flex relative mt-[47px]">
                        <Image src={email} className="w-6 h-6 absolute top-[18px] left-[10px]" />
                        <input className="border-0 w-[248px] h-full bg-white pl-[43px] text-[14px] text-black"
                            type="text" placeholder="Enter email for newsletter" />
                        <button className="bg-project-orange text-white w-[85px] h-full flex justify-center items-center text-[14px]">Subscribe</button>
                    </div>

                </div>

            </div>
            <div className="px-[123px] bg-[#121212] pt-[78px] pb-[61px]">
                <div className="h-[6px] rounded-lg bg-white mb-[18px] w-full"></div>
                <h5 className="text-white text-2xl">© 2022 Toury. All Rights Reserved.</h5>
            </div>
        </>
    );
}
