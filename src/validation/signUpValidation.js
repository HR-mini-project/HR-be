const Joi = require("joi");
const { STATUS_CODE } = require("../constant");

const upperCaseConstraint = {
    isAtleast1Uppercase: (value, helpers) => {
        if (/[A-Z]/.test(value)) return value;
        return helpers.error("any.valid");
    },
    message: "{#label} password must have atleast 1 uppercase",
};

const signUpSchema = Joi.object({
    nama: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string()
    .min(8)
    .custom(upperCaseConstraint.isAtleast1Uppercase)
    .message(upperCaseConstraint.message)
    .required(),
    position: Joi.string().allow(),
    departement: Joi.number().allow(),
});

function validateSignUp(req, res, next) {
    const { error } = signUpSchema.validate(req.body);

    if (error)
    return res
        .status(STATUS_CODE.ERROR.BAD_REQUEST)
        .send({ message: error.message });

    next();
}

module.exports = validateSignUp;
