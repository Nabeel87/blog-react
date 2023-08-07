const express = require("express");
const app =express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to MongoDB")
      } catch (error) {
        throw error;
      }
};

mongoose.connection.on("disconnected", ()=>{
  console.log("mongoDB disconnected...")
})

app.listen("5000", ()=>{
    connect();
    console.log("backend is running");
})