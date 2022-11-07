const mongoose = require("mongoose");

const mongoURI = "mongodb://127.0.0.1:27017/megmo";

const connectToMongo = () => {
    mongoose.connect(mongoURI , ()=> {
        console.log("Connected To Mongo Successfully");
    })
}

module.exports = connectToMongo;
