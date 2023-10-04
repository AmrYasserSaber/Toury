"use client";
import appwriteService from "@/appwrite/config";
import useAuth from "@/context/useAuth";
import {useRouter} from "next/navigation";
import React, {useEffect, useState} from "react";
import conf from "@/conf/config";

const BookTripPage = ({params}) => {
    const router = useRouter();
    const [user, setUser] = useState({name: '', email: ''});

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch user data
                const userData = await appwriteService.getCurrentUser();
                setUser(userData);

                // Create a document for the user's booked trip
                const createResponse = await appwriteService.createDocument(conf.appwriteDatabaseId, conf.appwriteUserTripsId, {
                    user_id: userData.$id,
                    trip_id: params.id,
                });
                router.replace('/trip')
            } catch (error) {
                console.error("Error booking trip:", error);
            }
        };

        fetchData().then(r => r);
    }, [params.id, router]);

    return (
        <></>
    );
};

export default BookTripPage;