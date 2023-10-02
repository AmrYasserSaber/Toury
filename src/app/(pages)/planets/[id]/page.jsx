"use client";
import React, {useEffect, useState} from "react";
import appwriteService from "@/appwrite/config";

export default function PlanetProfile(params) {
    const [planetData, setPlanetData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        async function fetchData() {
            try {
                const collectionId = process.env.NEXT_PUBLIC_APPWRITE_PLANETS_ID;
                const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
                const data = await appwriteService.getDocument(databaseId, collectionId, params.params.id);
                setPlanetData(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        fetchData().then(setLoading(false));
    }, [params.id]);

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
            <p className={"text-4xl"}>planet : {planetData}</p>
        </div>
    );
}
