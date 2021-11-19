const express = require("express");
const router = express.Router();
const { check, validationResult } = require('express-validator')
const gravatar = require('gravatar');
const User = require('../../models/User');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
require('dotenv').config();

// @route   Post api/users
// @desc    Registers a new user. Registration requires
//          a valid email address, a name, and a
//          password with at least 6 characters.
// @access  Public
router.post('/',
    // Validate input from form with express-validator package.
    [
        check('name', 'Name is required').not().isEmpty(),
        check('email', "Please include a valid email").isEmail(),
        check('password', "Password requires 6 or more characters").isLength({min:6})
    ], 
    async (req, res) => {

        // Return all validation issues in an array if failed.
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
    }

    const { name, email, password } = req.body;

    // Case -> Validation Passed. Try to Register User
    try {
        let user = await User.findOne({ email });

        // Case -> User already registered under this email (Invalid Register)
        if(user){
            return res.status(400).json({ errors: [{ msg: "User already exists" }] });
        }

        // If the email is attached to a Gravatar, get the url for it. 
        // Gravatar docs: https://en.gravatar.com/
        const avatar = gravatar.url(email, {
            s: "200",
            r: "pg",
            d: "mm"
        });

        // Case -> User does not already exist (Add new user)
        user = new User({
            name,
            email,
            avatar,
            password
        })

        // Encrypt the user's password for storage.
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();

        /*------------------------------------------------
            Create a json web token for the user
            and return it to the front end on a successful 
            user registration. This will contain the user's
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

})

module.exports = router;