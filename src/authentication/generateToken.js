const jwt = require('jsonwebtoken')
require('dotenv').config()
function generateToken(object){
    const token =  jwt.sign(object, process.env.JSON_WEBTOKEN_PASS, {expiresIn : '3d'})
    return token
}

module.exports = generateToken
