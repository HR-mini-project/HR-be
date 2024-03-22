const jwt = require("jsonwebtoken");
const { TOKEN } = require("../constant");
require("dotenv").config();

function verifyToken(token) {
    try {
        jwt.verify(token, process.env.JSON_WEBTOKEN_PASS);
        return TOKEN.VERIFIED;
    } catch (error) {
        if (error instanceof jwt.TokenExpiredError) {
            return TOKEN.EXPIRED;
        }

        return TOKEN.INVALID;
    }
}

module.exports = verifyToken;
