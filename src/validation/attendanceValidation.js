const Joi = require("joi");
const { STATUS_CODE, ATTENDANCE_STATUS_STRING_TO_ID, APPROVAL_STATUS_STRING_TO_ID } = require("../constant");


const attendanceSchema = Joi.object({
    nip : Joi.string().required(),
    arrival : Joi.string().regex(/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/).message("time format must hh:ss:mm").required(),
    leave : Joi.string().regex(/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/).message("time format must hh:ss:mm").required(),
    date : Joi.date().required(),
    reason : Joi.string().allow(''),
    approval_status_id : Joi.array().valid(...Object.values(APPROVAL_STATUS_STRING_TO_ID)),
    attendance_status_id : Joi.array().valid(...Object.values(ATTENDANCE_STATUS_STRING_TO_ID)),
})

function attendanceValidate (req,res,next){
    const {error} = attendanceSchema.validate(req.body)
    if(!error) next()
    else return res.status(STATUS_CODE.ERROR.BAD_REQUEST).send({message:"attendance form not valid"})
}


module.exports = attendanceValidate
