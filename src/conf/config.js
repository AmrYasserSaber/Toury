const conf = {
    appwriteUrl: String(process.env.NEXT_PUBLIC_APPWRITE_URL),
    appwriteProjectId: String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID),
    appwritePlantsId: String(process.env.NEXT_PUBLIC_APPWRITE_PLANETS_ID),
    appwriteMoonsId: String(process.env.NEXT_PUBLIC_APPWRITE_MOONS_ID),
    appwritePlanetsContentId: String(process.env.NEXT_PUBLIC_APPWRITE_PLANETS_CONTENT_ID),
    appwriteMoonsContentId: String(process.env.NEXT_PUBLIC_APPWRITE_MOONS_CONTENT_ID),
    appwritePlanetsDestinationsId: String(process.env.NEXT_PUBLIC_APPWRITE_PLANETS_DESTINATIONS_ID),
    appwriteMoonsDestinationsId: String(process.env.NEXT_PUBLIC_APPWRITE_MOONS_DESTINATIONS_ID),
    appwritePlanetsDestinationsContentId: String(process.env.NEXT_PUBLIC_APPWRITE_PLANETS_DESTINATIONS_CONTENT_ID),
    appwriteMoonsDestinationsContentId: String(process.env.NEXT_PUBLIC_APPWRITE_MOONS_DESTINATIONS_CONTENT_ID),
    appwriteTripsId: String(process.env.NEXT_PUBLIC_APPWRITE_TRIPS_ID)
}

export default conf