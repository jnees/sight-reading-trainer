const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const AttemptSchema = new Schema({
    userID: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    keySig: {
        type: String
    },
    note: {
        type: String
    },
    correct: {
        type: Boolean
    }
});

module.exports = Attempt = mongoose.model('attempt', AttemptSchema);