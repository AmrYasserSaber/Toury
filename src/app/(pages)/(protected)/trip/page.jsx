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
        const fetchData = async () => {
            try {
                const userData = await appwriteService.getCurrentUser();
                setUser(userData);

                const userTripsResponse = await appwriteService.queryCollectionDocuments(conf.appwriteUserTripsId, "user_id", user.$id);
                const tripIds = userTripsResponse.documents.map((trip) => trip.trip_id);
                console.log(tripIds);

                const tripsData = [];

                for (const tripId of tripIds) {
                    const planetsResponse = await appwriteService.queryCollectionDocuments(conf.appwritePlanetsTripsId, "$id", tripId);
                    const moonsResponse = await appwriteService.queryCollectionDocuments(conf.appwriteMoonsTripsId, "$id", tripId);

                    tripsData.push({
                        planets: planetsResponse.documents,
                        moons: moonsResponse.documents,
                    });
                }

                setTrips(tripsData);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };

        fetchData().then(r => r);
    }, [user.$id]);

    return (
        <div className="w-full max-w-xl mx-auto py-8 flex flex-wrap gap-y-6">
            <h1 className="w-full flex items-center gap-x-4">
                <Link href={"../"}>
          <span
              className="inline-flex justify-center items-center w-10 h-10 bg-gray-200/70 hover:bg-gray-100 rounded-xl">
            &lt;
          </span>
                </Link>
                <span className="text-3xl font-bold">My Trips</span>
            </h1>
            {loading ? (
                <div className="w-full flex justify-center items-center">Loading...</div>
            ) : (
                <Trips trips={trips[0]}/>
            )}
        </div>
    );
};

export default TripsPage