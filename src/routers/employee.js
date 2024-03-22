const { Router } = require("express");
const employeeValidation = require("../validation/employeValidation");
const { AUTHORIZATION, STATUS_CODE } = require("../constant");
const employeeServices = require("../services/employee");
const determineRoles = require("../authentication/determineRoles");
const authMiddleWare = require("../authentication/AuthMiddleware");
const validatePaginationParams = require("../validation/paginationValidation");

const employeeRouter = Router();

employeeRouter.post(
    "/employee",
    authMiddleWare,
    employeeValidation,
    assignDefaultAuth,
    determineRoles({
        [AUTHORIZATION.ADMIN]: async  (req,res) =>  await employeeServices.createEmployee(req,res),
    }),
);

employeeRouter.get(
    "/employee",
    authMiddleWare,
    validatePaginationParams,
    determineRoles({
        [AUTHORIZATION.ADMIN]: async (req,res) => await employeeServices.getAllEmployees(req,res),
    }),
);

employeeRouter.get(
    "/employee/:id",
    authMiddleWare,
    determineRoles({
        [AUTHORIZATION.ADMIN]: async (req,res) => await employeeServices.getEmployee(req,res),
        [AUTHORIZATION.EMPLOYEE]: async (req, res, decodedToken) => {
            if (req.params.id === decodedToken.nip) return await employeeServices.getEmployee(req,res);
            res
                .status(STATUS_CODE.ERROR.FORBIDDEN)
                .send({ message: "Access restricted" });
        },
    }),
);

employeeRouter.put(
    "/employee/:id",
    authMiddleWare,
    employeeValidation,
    determineRoles({
        [AUTHORIZATION.ADMIN]: async (req,res) => await employeeServices.updateEmployeeData(req,res) ,
        [AUTHORIZATION.EMPLOYEE] : async (req,res,decodedToken) => {
            if(decodedToken.nip === req.params.id) return await employeeServices.updateEmployeeData(req,res)
            return res.status(STATUS_CODE.ERROR.FORBIDDEN).send({message:"Access restricted"})
        }
    }),
);

employeeRouter.delete(
    "/employee/:id",
    authMiddleWare,
    determineRoles({
        [AUTHORIZATION.ADMIN]: async (req,res) => await employeeServices.deleteEmployee(req,res),
    }),
);

module.exports = employeeRouter;

function assignDefaultAuth(req, res, next) {
    req.body.authorization_id = AUTHORIZATION.EMPLOYEE;
    next();
}
