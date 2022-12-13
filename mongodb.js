import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

export const db = mongoose.connect(process.env.KEY_MONGO_DB).then(()=> {
    console.log("Successfully connected to MongoDB")
}).catch((error)=>console.error("Error connecting to MongoDB", error));

export default db;