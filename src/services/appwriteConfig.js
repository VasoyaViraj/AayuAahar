import { Client, Databases, ID, Storage, Account} from "appwrite";

class Database {

    client = new Client()
        .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
        .setProject(import.meta.env.VITE_APPWRITE_PROJECTID);

    databases = new Databases(this.client);

    storage = new Storage(this.client);

    account = new Account(this.client);

    async createAuthSession(user){
        try{
            const res = await this.account.createEmailPasswordSession(user.email, user.password);
            return res;
        }catch(e){
            console.log("Error occured while creating user session :", e);
        }
    }

    async getCurrentUser(){
        try{
            const res = await this.account.get();
            console.log(res);   
            return res;
        }catch(e){
            console.log("Error occured while fetching current user :", e);
        }
    }

    async logoutAuthSession() {
        try {
          const res = await this.account.deleteSession('current');
          return res;
        } catch (e) {
          console.log("Error occurred while logging out current user:", e);
        }
      }

    // async createEvent(eventToCreate){
    //     try{
    //         const response = await this.databases.createDocument(
    //             import.meta.env.VITE_APPWRITE_DATABASEID,
    //             import.meta.env.VITE_APPWRITE_EVENTS_COLLECTIONID,
    //             ID.unique(),
    //             eventToCreate
    //         );
    //         return response.documents;
    //     }catch(e){
    //         console.log("Error occured while creating a new event : ", e);
    //     }
    // }

}

const DBService = new Database();

export { DBService };