const express = require("express");
const router = express.Router();

// Import Response Model
const Attempt = require("../../models/Attempt");

// @route GET api/attempts
// @desc Get all Attempts for given user
// @access Public  TODO: This will be authenticated user and microservice only later.
router.get("/:id", (req, res) => {
    Attempt.find()
        .sort({ date: -1})
        .then(items => res.json(items));
});

// @route POST api/attempts
// @desc Post new Attempt
// @access Public
router.post("/", (req, res) => {
   
    const newAttempt = new Attempt({
        userID: req.body.userID,
        keySig: req.body.keySig,
        note: req.body.note,
        correct: req.body.correct   
    })

    newAttempt.save()
        .then(attempt => res.json(attempt))
        .catch(err => res.json(err));
});

module.exports = router;