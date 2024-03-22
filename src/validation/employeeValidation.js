const Joi = require("joi");
const { STATUS_CODE } = require("../constant");

const employeeSchema = Joi.object({
    nama: Joi.string().max(100).required(),
    nip : Joi.string().required(),
    position : Joi.string().required().min(8),
    password : Joi.string().required(),
    email : Joi.string().email(),
    employee_document_id : Joi.number().allow(),
    departement : Joi.number().required(),
})

function validateEmployee(req,res,next){
    const {error} = employeeSchema.validate(req.body)

    if(!error) next()
    return res.status(STATUS_CODE.ERROR.BAD_REQUEST).send({message:"Invalid employee form"})
}

module.exports = validateEmployee
