const conf = {
    appwriteUrl: String(process.env.NEXT_PUBLIC_APPWRITE_URL),
    appwriteProjectId: String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID),
    appwritePlanetsId: String(process.env.NEXT_PUBLIC_APPWRITE_PLANETS_ID),
    appwriteMoonsId: String(process.env.NEXT_PUBLIC_APPWRITE_MOONS_ID),
    appwritePlanetsContentId: String(process.env.NEXT_PUBLIC_APPWRITE_PLANETS_CONTENT_ID),
    appwriteMoonsContentId: String(process.env.NEXT_PUBLIC_APPWRITE_MOONS_CONTENT_ID),
    appwritePlanetsDestinationsId: String(process.env.NEXT_PUBLIC_APPWRITE_PLANETS_DESTINATIONS_ID),
    appwriteMoonsDestinationsId: String(process.env.NEXT_PUBLIC_APPWRITE_MOONS_DESTINATIONS_ID),
    appwritePlanetsDestinationsContentId: String(process.env.NEXT_PUBLIC_APPWRITE_PLANETS_DESTINATIONS_CONTENT_ID),
    appwriteMoonsDestinationsContentId: String(process.env.NEXT_PUBLIC_APPWRITE_MOONS_DESTINATIONS_CONTENT_ID),
    appwritePlanetsTripsId: String(process.env.NEXT_PUBLIC_APPWRITE_PLANETS_TRIPS_ID),
    appwriteMoonsTripsId: String(process.env.NEXT_PUBLIC_APPWRITE_MOONS_TRIPS_ID),
    appwriteUserTripsId:String(process.env.NEXT_PUBLIC_APPWRITE_USER_TRIPS_ID),
    appwritePlanetsArticlesId:String(process.env.NEXT_PUBLIC_APPWRITE_PLANET_ARTICLES_ID),
    appwriteMoonsArticlesId:String(process.env.NEXT_PUBLIC_APPWRITE_PLANET_ARTICLES_ID)
}

export default conf