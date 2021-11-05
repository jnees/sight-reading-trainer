const express = require("express");
const router = express.Router();
const axios = require("axios");

// @route GET api/stats
// @desc Get all Attempts for given user from microservice
// @access Public
router.get("/:id", (req, res) => {
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

module.exports = router;