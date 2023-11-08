import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";



const connectDB = async () =>{
    try {
        const conncetionInstance = await mongoose.connect(`${process.env.MAGODB_URI}/${DB_NAME}`)
        console.log(`\n Mangodb connected !!!! DB host: ${conncetionInstance.connection.host}`)
    } catch (error) {
        console.log("mangodb conncetion error", error);
        process.exit(1)
    }
}

export default connectDB