import dotenv from "dotenv";
import mongoose from "mongoose";


dotenv.config()


const DB_URI = process.env.DB_URI;

const connectDB = async () => {

  try {
    await mongoose.connect(DB_URI);
    console.log("DB CONNECTED SUCCESSFULLY!!")
    
  } catch (error) {
    console.error("SOMETHING WENT WRONG TRYING TO CONNECT DB ..." + error.message)
  }
}


export default connectDB;
