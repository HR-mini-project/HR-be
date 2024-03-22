const jwt = require('jsonwebtoken')
const { AUTHORIZATION } = require('../constant')
function getTokenRolesAndNip(token){
    const {authorization_id,nip} = jwt.decode(token) 
    const decoded = {role:AUTHORIZATION [ authorization_id ], nip}
    return  decoded
}

module.exports = getTokenRolesAndNip
