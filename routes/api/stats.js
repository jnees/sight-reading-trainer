const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const Attempt = require("../../models/Attempt");
const compile_stats = require("../../compile_stats");


// @route GET api/stats
// @desc Get all Attempts for given user from microservice
// @access Public
router.get("/:id", (req, res) => {
    console.log(`GET /${req.params.id}`)
    
    Attempt.find({userID: req.params.id})
        .then((results) =>{
            stats = compile_stats(results, req.params.id);
            return res.json(stats)
        })
        .catch((err) => {
            console.log(err);
            return res 
                .status(503)
                .json({status: "Failed to get user stats."})
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