const mongoose = require("mongoose");


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log("mongoose connected successfully");
    } catch (error) {
        console.log("mongoose connection failed");
    }
}

module.exports = connectDB