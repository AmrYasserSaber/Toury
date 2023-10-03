"use client"


import React, {useEffect, useState} from "react"
import Link from "next/link";
import Trips from "@/components/trips";
import appwriteService from "@/appwrite/config";
import conf from "@/conf/config";


const TripsPage = () => {
    const [user, setUser] = useState({name: '', email: ''});
    const [trips, setTrips] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const userData = await appwriteService.getCurrentUser()
            if (userData) {
                setUser(userData)
            }
        })()
    }, []);
    appwriteService.queryCollectionDocuments(conf.appwriteTripsId,"user_id",user.$id).then((res) => {
        setTrips(res.documents)
        setLoading(false)
    })

    return (
        <div className="w-full max-w-xl mx-auto py-8 flex flex-wrap gap-y-6">
            <h1 className=" w-full flex items-center gap-x-4">
                <Link href={"../"}>
                    <span
                        className="inline-flex justify-center items-center w-10 h-10 bg-gray-200/70 hover:bg-gray-100 rounded-xl">
                        &lt;
                    </span>
                </Link>
                <span className="text-3xl font-bold">My Trips</span>
            </h1>
            {loading ? <div className="w-full flex justify-center items-center"/> : <Trips trips={trips}/>}
        </div>
    );
}

            export default TripsPage