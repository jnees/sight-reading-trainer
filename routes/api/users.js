const express = require("express");
const router = express.Router();
const { check, validationResult } = require('express-validator')
const gravatar = require('gravatar');
const User = require('../../models/User');
const bcrypt = require("bcryptjs");

// @route   Post api/users
// @desc    Register user
// @access  Public
router.post('/', [
    check('name', 'Name is required')
        .not()
        .isEmpty(),
    check('email', "Please include a valid email").isEmail(),
    check('password', "Please enter a password with 6 or more characters")
        .isLength({min:6})
], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const { name, email, password } = req.body;

    try {
        // Check if user exists already
        let user = await User.findOne({ email });

        if(user){
            return res.status(400).json({ errors: [{ msg: "User already exists" }] });
        }

        // Get user's gravatar
        const avatar = gravatar.url(email, {
            s: "200",
            r: "pg",
            d: "mm"
        });

        // New user
        user = new User({
            name,
            email,
            avatar,
            password
        })

        // Encrypt password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();

        // return jsonwebtoken

        return res.send("User registered");
    } catch(err) {
        console.error(err.message);
        return res.status(500).send('Server Error');
    }

})

module.exports = router;