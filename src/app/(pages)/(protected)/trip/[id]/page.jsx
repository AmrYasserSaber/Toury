"use client";
import React, {useEffect, useState} from "react";
import appwriteService from "@/appwrite/config";
import conf from "@/conf/config";

export default function TripProfile(params) {
    const [tripData, setTripData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        async function fetchData() {
            try {
                const collectionId = conf.appwriteTripsId;
                const databaseId = conf.appwriteDatabaseId;
                const data = await appwriteService.getDocument(databaseId, collectionId, params.params.id);
                setTripData(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false); // Set loading to false when fetching is done
            }
        }

        fetchData().then(r => r); // Just call fetchData directly
    }, [params.params.id]);


    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }


    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-3xl font-bold m-2">Profile</h1>
            <hr/>
            <script>console.log(planetData.name);</script>
            <p className={"text-4xl"}>trip : {tripData.name}</p>
        </div>
    );
}
