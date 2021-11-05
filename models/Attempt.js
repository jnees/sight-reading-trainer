const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Attempt: Info created when a user attempts to play a given note.
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