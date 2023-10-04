import React, {useEffect, useState} from "react";

const Trips = ({trips}) => {
    return (
        console.log(trips),
            <div>
                {trips && (trips.planets.length > 0 || trips.moons.length) ? (
                    <>
                        <p className="">Planets:</p>
                        <ul>
                            {trips.planets.map((trip) => (
                                <li key={trip.name}>{trip.name}</li>
                            ))}
                        </ul>
                        <p className="">Moons:</p>
                        <ul>
                            {trips.moons.map((trip) => (
                                <li key={trip.name}>{trip.name}</li>
                            ))}
                        </ul>
                    </>
                ) : (
                    <p>No trips</p>
                )}
            </div>
    );
};

export default Trips;
