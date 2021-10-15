const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const PORT = process.env.port || 3000;

// Listener
app.listen(PORT, () =>{
    console.log("Server running on port " + PORT);
})