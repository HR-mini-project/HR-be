const Joi = require("joi");
const { STATUS_CODE } = require("../constant");


const signInSchema = Joi.object({
    email : Joi.string().email().required(),
    password : Joi.string().min(1).required()
})

function validateSignIn(req,res,next){
    const {error} = signInSchema.validate(req.body)

    if(error) return res.status(STATUS_CODE.ERROR.BAD_REQUEST).send({message:error.message})

    next()
}



module.exports = validateSignIn
