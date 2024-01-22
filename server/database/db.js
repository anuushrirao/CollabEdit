import mongoose from "mongoose";

const Connection = async () => {
    const URL = 'mongodb+srv://user:admin@cluster0.idp2fsh.mongodb.net/?retryWrites=true&w=majority';

    try {
        await mongoose.connect(URL);
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Error while connecting with database", error);
    }
}

export default Connection;
