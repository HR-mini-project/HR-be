const { MODELS_PATH, STATUS_CODE } = require("../constant")

const {employee} = require(MODELS_PATH)
async function signUp(req,res){
    try {
        const user = await employee.create({
            ...req.body
        })
        return res.status(STATUS_CODE.SUCCESS).send({message:"Sign up successful"})
    } catch (error) {
        return res.status(STATUS_CODE.ERROR.CONFLICT).send({message: "Email already in use"})
    }
}

module.exports = signUp
