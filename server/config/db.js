// const mongoose = require('mongoose')
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log("Monggo DB Connection Success")
    } catch (error) {
        console.log("Monggo DB Connection Failed")
        process.exit(1);
    }
}

export default connectDB;