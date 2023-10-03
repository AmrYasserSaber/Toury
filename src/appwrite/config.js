import conf from "@/conf/config";
import {Client, Account, ID, Databases} from 'appwrite'


const appwriteClient = new Client()
appwriteClient.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);

export const account = new Account(appwriteClient)

export const database = new Databases(appwriteClient)

export class AppwriteService {
    //create a new record of user inside appwrite
    async createUserAccount({email, password, name}) {
        try {
            const userAccount = await account.create(ID.unique(), email, password, name)
            if (userAccount) {
                return this.login({email, password})
            } else {
                return userAccount
            }
        } catch (error) {
            throw error
        }
    }

    async login({email, password}) {
        try {
            return await account.createEmailSession(email, password)
        } catch (error) {
            throw error
        }
    }

    async isLoggedIn() {
        try {
            const data = await this.getCurrentUser();
            return Boolean(data)
        } catch (error) {
        }
        return false
    }

    async getCurrentUser() {
        try {
            return account.get()
        } catch (error) {
            console.log("getcurrentUser error: " + error)
        }

        return null
    }

    async logout() {
        try {
            return await account.deleteSession("current")
        } catch (error) {
            console.log("logout error: " + error)
        }
    }

    async getCollection(databaseID,collectionId) {
        try {
            return await database.listDocuments(databaseID,collectionId)
        } catch (error) {
            console.log("getCollection error: " + error)
        }
    }

    async getDocument(databaseID,collectionId, documentId) {
        try {
            return await database.getDocument(databaseID,collectionId, documentId)
        }catch (error) {
            console.log("getDocument error: " + error)
        }
    }


    async createDocument(collectionId, data) {
        try {
            return await database.createDocument(collectionId, data)
        } catch (error) {
            console.log("createDocument error: " + error)
        }
    }

    async updateDocument(collectionId, documentId, data) {
        try {
            return await database.updateDocument(collectionId, documentId, data)
        } catch (error) {
            console.log("updateDocument error: " + error)
        }
    }

    async deleteDocument(collectionId, documentId) {
        try {
            return await database.deleteDocument(collectionId, documentId)
        } catch (error) {
            console.log("deleteDocument error: " + error)
        }
    }
    async getCollectionDocuments(databaseId,collectionId) {
        try {
            return await database.listDocuments(databaseId,collectionId)
        } catch (error) {
            console.log("getCollectionDocuments error: " + error)
        }
    }
    async getDatabase() {
        try {
            return await database.list();
        } catch (error) {
            console.log("getDatabase error: " + error)
        }
    }
}

const appwriteService = new AppwriteService()

export default appwriteService