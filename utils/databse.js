import mongoose from "mongoose";

let connected = false 

export const startDB = async() => {
    mongoose.set("strictQuery", true)
    if(connected){
        console.log("MongoDB is already connected") 
        return 
    }
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: "share_prompt", 
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        connected = true
    } catch (error) {
        console.log(error)
    }
}