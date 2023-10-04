"use client";
import appwriteService from "@/appwrite/config";
import useAuth from "@/context/useAuth";
import Link from "next/link";
import {useRouter} from "next/navigation";
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
        e.preventDefault()
        try {
            const userData = await appwriteService.createUserAccount(formData);
            if (userData) {
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

        {/* <!-- frist section --> */}
        <div className="bg-red-500 min-h-screen flex items-center justify-center">

            <form className="bg-white p-8 rounded-lg shadow-lg max-w-[782px] max-h-[993] w-full h-full flex flex-col items-center">
                <div className="text-center">
                    <img src="\imgs\Blue and Yellow Elegant Modern className={} Academy Logo (1) 1(1).png" width="160px"
                         alt="Logo"/>
                    <h2 className="text-[41px] text-black font-bold">Register</h2>
                </div>

                <div className="max-w-[401px] w-full mt-9">
                    <label className="block text-gray-700 text-[29px]">Full name</label>
                    <input type="text" className="w-full px-3 py-2 mt-2.5 border-2 rounded-md h-[43px] text-black" placeholder="Enter your Name"
                           name="Name"/>
                </div>

                <div className="mt-4 max-w-[401px] w-full">
                    <label className="block text-gray-700 text-[29px]">Email</label>
                    <input type="text" className="w-full px-3 py-2 mt-2.5 border-2 rounded-md h-[43px] text-black" placeholder="Enter your E-mail"
                           name="Email"/>
                </div>

                <div className="mt-4 max-w-[401px] w-full">
                    <label className="block text-gray-700 text-[29px]">Password</label>
                    <input type="password" className="w-full px-3 py-2 mt-2.5 border-2 rounded-md h-[43px] text-black"
                           placeholder="Enter your password" name="password"/>
                </div>

                <div className="mt-4 max-w-[401px]">
                    <div className="flex items-center">
                        <input type="checkbox" name="Remember" id="remember" className="mr-2"/>
                        <label htmlFor="remember" className="text-[29px]">Remember</label>
                    </div>
                </div>

                <div className="mt-6">
                    <button type="button" id="btnn"
                            className="w-full bg-orange-500 text-white font-bold py-2 px-4 rounded-full">
                        Login
                    </button>
                </div>

                <div className="mt-6 text-center">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-gray-500">or</span>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex justify-center">
                    <div className="mr-8">
                        <div className="flex items-center">
                            <i className="fab fa-google text-red-500 text-xl mr-2"></i>
                            <h6>Google</h6>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center">
                            <i className="fab fa-facebook text-blue-500 text-xl mr-2"></i>
                            <h6>Facebook</h6>
                        </div>
                    </div>
                </div>

                <div className="mt-6 text-center">
                    <a href="#" className="text-blue-500 underline">I don't have an account</a>
                </div>
            </form>
        </div>
        {/* <!-- end section --> */}
        </div>
    )
}

export default Signup;