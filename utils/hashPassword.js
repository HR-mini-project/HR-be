require('dotenv').config()
const crypto = require('crypto')

function hashPassword(password) {
    const salt = process.env.HASH_SALT
    const hash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha256').toString('hex');
    return hash 
}

module.exports = hashPassword
