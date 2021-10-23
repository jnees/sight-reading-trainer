const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.port || 3000;

const attempts = require("./routes/api/attempts");

const app = express();

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// Middleware
app.all('*', logCall);
    
function logCall(req, res, next) {
  console.log(req.url, req.body);
  next();
}

// db config
const db = require("./config/keys.js").mongoURI;

// Connect mongoose
mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to database..."))
    .catch(err => console.log(err));

// Use Routes
app.use("/api/attempts", attempts);



// Listener
app.listen(PORT, () =>{
    console.log("Server running on port " + PORT);
})