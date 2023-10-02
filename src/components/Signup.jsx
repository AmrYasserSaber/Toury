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
        console.log("create")
        e.preventDefault()
        try {
            console.log(appwriteService.createUserAccount(formData))
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
        <body className="bg-cover bg-center bg-fixed bg-no-repeat h-screen"
              style={{backgroundImage: 'url("imgs/photo.png")'}}>

        {/* <!-- frist section --> */}
        <div className="bg-red-500 min-h-screen flex items-center justify-center">

            <form className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-center">
                    <img src="\imgs\Blue and Yellow Elegant Modern className={} Academy Logo (1) 1(1).png" width="160px"
                         alt="Logo"/>
                    <h2 className="text-2xl font-semibold">Register</h2>
                </div>

                <div className="mt-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Full name</label>
                    <input type="text" className="w-full px-3 py-2 border rounded-md" placeholder="Enter your Name"
                           name="Name"/>
                </div>

                <div className="mt-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                    <input type="text" className="w-full px-3 py-2 border rounded-md" placeholder="Enter your E-mail"
                           name="Email"/>
                </div>

                <div className="mt-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                    <input type="password" className="w-full px-3 py-2 border rounded-md"
                           placeholder="Enter your password" name="password"/>
                </div>

                <div className="mt-4">
                    <div className="flex items-center">
                        <input type="checkbox" name="Remember" id="remember" className="mr-2"/>
                        <label htmlFor="remember" className="text-sm">Remember</label>
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
        </body>
    )
}

export default Signup;