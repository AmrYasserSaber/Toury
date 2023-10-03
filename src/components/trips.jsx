import React, {useEffect, useState} from "react";
import appwriteService from "@/appwrite/config";
import Avatar from "@/components/Avatar";
import Link from "next/link";
import conf from "@/conf/config";
import {Query} from "appwrite";

const Trips = ({trips}) => {
    const [listOfTrips, setListOfTrips] = useState([]);
    const list = []
    useEffect(() => {
        if (trips) {
            trips.map((trip) => {
                list.push(<li key={trip.name}>{trip.name}</li>)
            })
            setListOfTrips(list)
        }
    }, [trips]);
    return (
        listOfTrips.length > 0 ? <ul>{listOfTrips}</ul> : <p>No trips</p>
    );
}

export default Trips;