"use client";
import useAuth from "@/context/useAuth";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import logo from "../static/logo-cropped.svg";
import { usePathname } from 'next/navigation'
import Image from 'next/image';

const menuItems = [
    {
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
    },
];

export default function Header() {
    const pathname = usePathname()
    const { authStatus } = useAuth();
    return (
        <div className="relative w-full bg-white py-2 pl-[80px]">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
                <div className="inline-flex items-center space-x-2 mr-[95px]">
                    <Link href={"/"} className="inline-block w-full max-w-[150px]">
                        <Image src={logo} className="w-[48px] h-[48px]" />
                    </Link>
                </div>
                <div className="hidden grow items-start lg:flex">
                    <ul className="flex justify-between w-[552px]">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                {pathname && pathname === item.href ? <Link
                                    href={item.href}
                                    className="inline-flex items-center text-2xl text-[#CCCCCC] hover:text-primary
                                               border-b-[1px] border-project-orange text-project-orange"
                                >
                                    {item.name}
                                </Link>: <Link
                                    href={item.href}
                                    className="inline-flex items-center text-2xl text-[#CCCCCC] hover:text-primary"
                                >
                                    {item.name}
                                </Link>}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="hidden space-x-2 lg:flex gap-[21px]">
                    <Link
                        href={authStatus ? "/profile" : "/login"}
                        className="flex justify-center items-center bg-project-orange py-[10px] transition-colors
                                   text-2xl text-white rounded-[5px] w-[182px] hover:bg-orange-800"
                    >
                        {authStatus ? "Profile" : "Login"}
                    </Link>
                    <Link
                        href={authStatus ? "/logout" : "/signup"}
                        className="flex justify-center items-center bg-transparent border-2 text-project-orange transition-colors
                                 border-project-orange py-[10px] text-2xl rounded-[5px] w-[182px] hover:border-orange-800 hover:text-orange-800"
                    >
                        {authStatus ? "Logout" : "Sign Up"}
                    </Link>
                </div>
            </div>
        </div>
    );
}
