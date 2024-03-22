const generateToken = require("../authentication/generateToken");
const { MODELS_PATH, STATUS_CODE,  AUTHORIZATION_TO_STRING } = require("../constant");

const { employee } = require(MODELS_PATH);

async function signIn(req, res, next) {
    try {
        const user = await employee.findOne({
            where: {
                email: req.body.email,
                password: req.body.password,
            },
        });

        const token = generateToken({
            nip: user.nip,
            email: user.email,
            authorization_id: AUTHORIZATION_TO_STRING[user.authorization_id],
        });

        const {password, ...USER} = user.dataValues

        return res
            .status(STATUS_CODE.SUCCESS)
            .send({ message: "Sign in successful", token,  USER });
    } catch (error) {
        return res
            .status(STATUS_CODE.ERROR.BAD_REQUEST)
            .send({ message: "Invalid password or email" });
    }
}

module.exports = signIn
