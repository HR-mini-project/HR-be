const { STATUS_CODE } = require("../constant");
const getTokenRolesAndNip = require("./getTokenRoles");

const determineRoles = (servicesHandler) => {
    return async (req,res) => {
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = getTokenRolesAndNip(token);
        const selectedHandler = servicesHandler[decodedToken.role];
        if (selectedHandler) return await selectedHandler(req, res, decodedToken);
        else return res.status(STATUS_CODE.ERROR.FORBIDDEN).send({message:"Access Restricted"}) 
    };
};

module.exports = determineRoles;

