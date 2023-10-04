"use client"


import {useEffect, useState} from "react";

const Planets = ({planets}) => {
    const [listOfPlanet, setListOfPlanet] = useState([]);
    let list=[]
    useEffect(() => {
        if (planets) {
            planets.map((planet) => {
                list.push(<li key={planet.name}>{planet.name}</li>)
            })
            setListOfPlanet(list)
        }
    }, [planets]);

    return (
        listOfPlanet
    )
}

export default Planets