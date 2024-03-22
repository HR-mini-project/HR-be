const { TOKEN, STATUS_CODE } = require("../constant");
const verifyToken = require("./verifyToken");

function authMiddleWare(req,res,next){
    let authToken
    try {
        authToken = ( req.headers.authorization ).split(' ')[1]
    } catch (error) {
        return res.status(STATUS_CODE.ERROR.BAD_REQUEST).send({message: "must inlcude authorization"})
    }
    const token = verifyToken(authToken)
    if(token === TOKEN.VERIFIED) next()
    if(token === TOKEN.EXPIRED) return res.status(STATUS_CODE.ERROR.UNAUTHORIZED).send({message:"Expired Token"})
    if(token === TOKEN.INVALID) return res.status(STATUS_CODE.ERROR.UNAUTHORIZED).send({message:"Invalid TOken"})
}

module.exports = authMiddleWare
