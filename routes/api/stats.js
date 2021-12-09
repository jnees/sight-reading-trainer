const express = require("express");
const router = express.Router();
const axios = require("axios");
const auth = require("../../middleware/auth");
const Attempt = require("../../models/Attempt");

// @route GET api/stats
// @desc Get all Attempts for given user from microservice
// @access Public
router.get("/:id", (req, res) => {
    console.log(`GET /${req.params.id}`)
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
})

// @route DELETE api/stats
// @desc Delete all Attempts for given user from database.
// @access Authorized Users -> Must have token in header which
//         matches the userId in the parameters when decrypted.
router.delete("/:userId", auth, (req, res) => {
    user_params = req.params.userId;
    user_token = req.user.id;

    // Case -> token mismatch with requested user id
    if (user_params !== user_token){
        return res
                .status(403)
                .json({ error: 'Forbidden' })
    }

    // Case -> Valid request. Remove player stats.
    Attempt.deleteMany({userID: user_token})
        .then(() => {
            console.log(`Attempts for user: ${user_token} deleted successfully.`);
            return res.json({status: "Success"});
        })
        .catch((err) => {
            console.log(err);
            return res
                .status(503)
                .json({status: "Failed to delete user stats."});
        });
});


module.exports = router;