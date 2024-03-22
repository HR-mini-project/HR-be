
const joi = require('joi')
const {  STATUS_CODE, ATTENDANCE_STATUS_ID_TO_STRING, AUTHORIZATION_TO_STRING } = require('../constant')


const employeeSchema = joi.object({
    nama : joi.string().min(3).max(30).required(),
    email : joi.string().email().required(),
    password : joi.string().min(8).required(),
    position : joi.string().required(),
    departement_id : joi.array().valid (...Object.values(ATTENDANCE_STATUS_ID_TO_STRING)),
    authorization_id : joi.array().valid(...Object.values(AUTHORIZATION_TO_STRING)),
})

function employeeValidation(req,res,next){

    const {error} = employeeSchema.validate(req.body)

    if(!error) next()
    else res.status(STATUS_CODE.ERROR.BAD_REQUEST).send({message:error.message})
}

module.exports = employeeValidation
