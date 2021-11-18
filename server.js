const express = require("express");
const mongoose = require("mongoose");
const session = require('express-session');
const MongoStore = require('connect-mongo');
const attempts = require("./routes/api/attempts");
const stats = require("./routes/api/stats")
const findOrCreate = require('mongoose-findorcreate');
const dotenv = require('dotenv').config()

const app = express();


// Add req.body to all requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// DB Configuration
const db = require("./config/keys.js").mongoURI;
mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to database..."))
    .catch(err => console.log(err));

// Persistent Session Storage
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: db,
      ttl: 7 * 24 * 60 * 60
    })
  }));


// Routes
app.use("/api/attempts", attempts);
app.use("/api/stats", stats)

// Listener
const PORT = process.env.port || 3000;
app.listen(PORT, () =>{
    console.log("Server running on port " + PORT);
})