const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const User = require("../../models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

// @route   GET api/auth
// @desc    Returns info of user corresponding to the user id 
//          found in the request token. Does not include password.
// @access  Authorized Users -> Users with no token will be sent
//          error status by the auth middleware.
router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password")
        res.json(user);
    } catch(err){
        console.log(err);
        res.status(500).send("Server Error");
    }
})


// @route   Post api/auth
// @desc    Login an existing User using an email/password combo.
//          Successful logins return a json web token which
//          can be decoded to get the user's id number.
// @access  Public
router.post('/',
    // Validate input from form with express-validator package.
    [
        check('email', "Please include a valid email").isEmail(),
        check('password', "Please enter a password.").exists()
    ], 
    async (req, res) => {

        // Return all validation issues in an array if failed.
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }

        const { email, password } = req.body;

        // Case -> Validation Passed. Check for User.
        try {
            let user = await User.findOne({ email });

            // Case -> Invalid User Credentials
            if(!user){
                return res
                 .status(400)
                 .json({ errors: [{ msg: "Invalid Credentials" }] });
            }

            // Case -> User found, invalid password entered
            const isMatch = await bcrypt.compare(password, user.password);
            if(!isMatch){
                return res
                 .status(400)
                 .json({ errors: [{ msg: "Invalid Credentials" }] });
            }

            /*------------------------------------------------
                Create a json web token for the user
                and return it to the front end on a successful 
                login. This will contain the user's
                id number from the db encoded within it along
                with other info.

                For more info on encoding and decoding 
                jwt: https://jwt.io/
            --------------------------------------------------*/
            const payload = {
                user: {
                    id: user.id
                }
            }

            // Create the JWT Token
            jwt.sign(
                payload, 
                process.env.JWT_SECRET,
                { expiresIn: "7 days"},
                (err, token) => {
                    if(err) throw err;
                    return res.json({ token });
                }
            );

        } catch(err) {
            console.error(err.message);
            return res.status(500).send('Server Error');
        }
});

module.exports = router;