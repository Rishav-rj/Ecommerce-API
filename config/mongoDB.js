import mongoose from "mongoose"

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("MongoDB is connect now!");
    }catch(err){
        console.log("something went wrong while connecting to MongoDB");
    }
}


export default connectDB;