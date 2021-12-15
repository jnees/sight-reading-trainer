const express = require("express");
const mongoose = require("mongoose");
const attempts = require("./routes/api/attempts");
const stats = require("./routes/api/stats");
const auth = require("./routes/api/auth");
const users = require("./routes/api/users");
const path = require("path");
const production_env = process.env.NODE_ENV;
require("dotenv").config();

const app = express();

// Add req.body to all requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// DB Configuration
const db = process.env.MONGO_URI;
mongoose.connect(db, { useNewUrlParser: true})
    .then(() => console.log("Connected to database..."))
    .catch(err => console.log(err));

// Serve static if in production
if(production_env){
    if(production_env.trim() === "production"){
        app.use(express.static('client/build'));

        app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
        });
    }
}

// Routes
app.use("/api/attempts", attempts);
app.use("/api/stats", stats);
app.use("/api/users", users);
app.use("/api/auth", auth);

// Listener
const PORT = process.env.port || 3000;
app.listen(PORT, () =>{
    console.log("Server running on port " + PORT);
})