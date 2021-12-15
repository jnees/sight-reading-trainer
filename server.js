const express = require("express");
const mongoose = require("mongoose");
const attempts = require("./routes/api/attempts");
const stats = require("./routes/api/stats");
const auth = require("./routes/api/auth");
const users = require("./routes/api/users");
const path = require("path");
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

    // Routes
app.use("/api/attempts", attempts);
app.use("/api/stats", stats);
app.use("/api/users", users);
app.use("/api/auth", auth);

// Serve static if in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('build'));
    app.get('*', (req, res) => {
      res.sendFile(path.join('build', 'index.html'));
    });
}

// Listener
const PORT = process.env.port || 5000;
app.listen(PORT, () =>{
    console.log("Server running on port " + PORT);
})