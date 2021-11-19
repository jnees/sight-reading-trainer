const jwt = require("jsonwebtoken");
require("dotenv").config();

/*-------------------------------------------------------
    Auth.js middleware extracts the user id from the 
    jwt token found in the header of a request. If 
    no token is found or the token is invalid, 
    this will respond with a 401 error (Not Authorized).
--------------------------------------------------------*/
module.exports = function(req, res, next){
    const token = req.header('x-auth-token');

    // Case -> No token found
    if(!token){
        return res.status(401).json({"msg": "No token. Authorization denied."});
    }

    // Case -> Token found
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.user;
        next();
    } catch(err){
        // Case -> Found token is not valid
        res.status(401).json({ msg: 'Token is not valid.'} );
    }
}