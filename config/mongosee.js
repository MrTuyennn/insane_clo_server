const mongoose = require("mongoose");
const MONGO_URI =
    "mongodb+srv://Admin:admin@cluster0.znohg.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority";
const connectDB = async() => {
    const conn = await mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
};
module.exports = connectDB;