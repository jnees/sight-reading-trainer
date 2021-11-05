const express = require("express");
const router = express.Router();
const axios = require("axios");

// @route GET api/stats
// @desc Get all Attempts for given user
// @access Public  TODO: This will be authenticated user and microservice only later.
router.get("/:id", (req, res) => {
    console.log("Requesting stats update from microservice.")
    axios
        .post(
            "https://music-stats-microservice.herokuapp.com",
            {id: req.params.id}
        )
        .then(stats =>{
            console.log(stats.data);
            res.json(stats.data);
        })
        .catch(err => {
            console.log(err);
        })
});

// @route POST api/stats
// @desc Clear user stats
// @access Public  TODO: This will be authenticated user only once implemented.
// router.post("/", (req, res) => {
//   });

module.exports = router;