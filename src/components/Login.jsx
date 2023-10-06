"use client";
import appwriteService from "@/appwrite/config";
import useAuth from "@/context/useAuth";
import Link from "next/link";
import {useRouter} from "next/navigation";
import React, {useState} from "react";
import Image from "next/image";
import logo from "@/static/logo.svg";
import google from "@/static/social/google.svg";
import facebook from "@/static/social/facebook.svg";

const Login = () => {
    const router = useRouter()
    const {setAuthStatus} = useAuth()
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })
    const [error, setError] = useState("")

    const login = async (e) => {
        e.preventDefault()
        const data = new FormData(e.target);
        const formDataObj = {};
        data.forEach((value, key) => (formDataObj[key] = value));
        try {
            const session = await appwriteService.login(formDataObj);
            if (session) {
                setAuthStatus(true)
                router.push("/profile")
            }
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div className="bg-cover bg-center bg-fixed bg-no-repeat h-screen"
              style={{backgroundImage: 'url("imgs/photo.png")'}}>

        {/* <!-- first section --> */}
        <div className="bg-[url('/register.jpg')] bg-cover min-h-screen flex items-center justify-center">
            <form onSubmit={login} className="bg-white px-8 pt-2 pb-[52px] rounded-2xl shadow-lg max-w-[782px] max-h-[993] w-full h-full flex flex-col items-center">
                <div className="text-center">
                    <Image className="w-[160px] h-[160px]" src={logo} />
                    <h2 className="text-[41px] text-black font-bold mt-[-32px]">Login</h2>
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
                            className="w-full bg-orange-500 text-white py-4 hover:bg-orange-800  transition-colors text-2xl rounded-[5px] lg:w-[415px]">
                        Login
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
                    <Link href="/signup" className="text-blue-500 underline text-xl">I don’t have an accout</Link>
                </div>
            </form>
        </div>
        {/* <!-- end section --> */}
        </div>
    )
}


export default Login;