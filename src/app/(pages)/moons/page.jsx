"use client";
import useAuth from "@/context/useAuth";
import {useRouter} from "next/navigation";
import React, {useEffect, useState} from "react";
import Planets from "@/components/Planets";
import conf from "@/conf/config";
import appwriteService from "@/appwrite/config";

const MoonPage = () => {
    const router = useRouter();
    const {authStatus} = useAuth();
    const [moons, setMoons] = React.useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const collectionId = conf.appwriteMoonsId;
                const databaseId = conf.appwriteDatabaseId;
                const data = await appwriteService.getCollectionDocuments(databaseId, collectionId);
                setMoons(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false); // Set loading to false when fetching is done
            }
        }

        fetchData().then(r => r); // Just call fetchData directly
    }, []);

    return (
        <section className="px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
            <Planets planets={moons.documents}/>
        </section>
    )
}

export default MoonPage;