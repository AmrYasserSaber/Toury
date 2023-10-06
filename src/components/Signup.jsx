"use client";
import appwriteService from "@/appwrite/config";
import useAuth from "@/context/useAuth";
import Link from "next/link";
import {useRouter} from "next/navigation";
import logo from "../static/logo.svg";
import google from "@/static/social/google.svg";
import facebook from "@/static/social/facebook.svg";
import Image from 'next/image';
import React, {useState} from "react";


const Signup = () => {
    const router = useRouter()
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        name: "",
    })
    const [error, setError] = useState("")

    const {setAuthStatus} = useAuth()

    const create = async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const formDataObj = {};
        data.forEach((value, key) => (formDataObj[key] = value));
        try {
            const userData = await appwriteService.createUserAccount(formDataObj);
            if (userData) {
                setAuthStatus(true)
                router.push("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div className="bg-cover bg-center bg-fixed bg-no-repeat h-screen"
              style={{backgroundImage: 'url("imgs/photo.png")'}}>

        {/* <!-- frist section --> */}
        <div className="bg-[url('/register.jpg')] bg-cover min-h-screen flex items-center justify-center">

            <form onSubmit={create} className="bg-white px-8 pt-2 pb-[52px] rounded-lg shadow-lg max-w-[782px] max-h-[993] w-full h-full flex flex-col items-center">
                <div className="text-center">
                    <Image className="w-[160px] h-[160px]" src={logo} />
                    <h2 className="text-[41px] text-black font-bold mt-[-32px]">Register</h2>
                </div>

                <div className="max-w-[415px] w-full mt-9">
                    <label className="block text-gray-700 text-[29px]">Full name</label>
                    <input type="text" className="w-full px-3 py-2 mt-2.5 border-2 rounded-md h-[43px] text-black"
                           name="name"/>
                </div>

                <div className="mt-4 max-w-[415px] w-full">
                    <label className="block text-gray-700 text-[29px]">Email</label>
                    <input type="text" className="w-full px-3 py-2 mt-2.5 border-2 rounded-md h-[43px] text-black"
                           name="email"/>
                </div>

                <div className="mt-4 max-w-[415px] w-full">
                    <label className="block text-gray-700 text-[29px]">Password</label>
                    <input type="password" className="w-full px-3 py-2 mt-2.5 border-2 rounded-md h-[43px] text-black" name="password"/>
                </div>

                <div className="mt-[51px]">
                    <button type="submit" id="btnn"
                            className="w-full bg-orange-500 text-white py-4 hover:bg-orange-800 
                                       transition-colors text-2xl rounded-[5px] lg:w-[415px]">
                        Register
                    </button>
                </div>

                <div className="mt-6 text-center w-full max-w-[415px] text-xl">
                    <div className="relative">
                        <div className="relative flex justify-between text-sm items-center">
                            <div className="h-0.5 w-[176px] bg-project-gray"></div>
                            <span className="px-2 bg-white text-gray-500">OR</span>
                            <div className="h-0.5 w-[176px] bg-project-gray"></div>
                        </div>
                    </div>
                </div>

                <div className="mt-[52px] flex justify-center">
                    <div className="mr-8">
                        <div className="flex gap-[9px] w-[71px] text-project-gray flex-col items-center hover:cursor-pointer">
                            <Image className="w-[50px] h-[50px]" src={google}/>
                            <h6>Google</h6>
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-[9px] w-[71px] text-project-gray flex-col items-center hover:cursor-pointer">
                            <Image className="w-[50px] h-[50px]" src={facebook}/>
                            <h6>Facebook</h6>
                        </div>
                    </div>
                </div>

                <div className="mt-6 text-center">
                    <Link href="/login" className="text-blue-500 underline text-xl">I already have an account</Link>
                </div>
            </form>
        </div>
        {/* <!-- end section --> */}
        </div>
    )
}

export default Signup;