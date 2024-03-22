const { Router } = require("express");
const authMiddleWare = require("../authentication/AuthMiddleware");
const determineRoles = require("../authentication/determineRoles");
const attendanceServices = require("../services/attendance");
const { AUTHORIZATION, STATUS_CODE } = require("../constant");
const attendanceValidate = require("../validation/attendanceValidation");
const validatePaginationParams = require("../validation/paginationValidation");

const attendanceRouter = Router();

attendanceRouter.get(
    "/attendance",
    authMiddleWare,
    validatePaginationParams,
    determineRoles({
        [AUTHORIZATION.ADMIN]: async (req, res) =>
            await attendanceServices.getAllEmployeesAttendance(req, res),
    }),
);

attendanceRouter.get(
    "/attendance/:id",
    authMiddleWare,
    validatePaginationParams,
    determineRoles({
        [AUTHORIZATION.ADMIN]: async (req, res) =>
            await attendanceServices.getAllAttendancesForOneEmployee(req, res),

        [AUTHORIZATION.EMPLOYEE]: async (req, res, decodedToken) => {
            if (req.params.id === decodedToken.nip)
            return await attendanceServices.getAllAttendancesForOneEmployee(
                req,
                res,
            );
            return res
                .status(STATUS_CODE.ERROR.FORBIDDEN)
                .send({ message: "Access restricted" });
        },
    }),
);

attendanceRouter.delete(
    "/attendance/:id",
    authMiddleWare,
    determineRoles({
        [AUTHORIZATION.ADMIN]: async (req, res) =>
            await attendanceServices.deleteEmployeeAttendance(req, res),
    }),
);

attendanceRouter.put(
    "/attendance:/:id",
    authMiddleWare,
    determineRoles({
        [AUTHORIZATION.ADMIN]: async (req, res) =>
            await attendanceServices.updateEmployeeAttendance(req, res),
    }),
);

attendanceRouter.post(
    "/attendance",
    authMiddleWare,
    attendanceValidate,
    determineRoles({
        [AUTHORIZATION.ADMIN]: async (req, res) =>
            await attendanceServices.createEmployeeAttendance(req, res),
        [AUTHORIZATION.EMPLOYEE]: async (req, res,decodedToken) => {
            if (req.body.nip === decodedToken.nip)
            return await attendanceServices.createEmployeeAttendance(req, res);
            return res
                .status(STATUS_CODE.ERROR.FORBIDDEN)
                .send({ message: "Access Restricted" });
        },
    }),
);


module.exports = attendanceRouter
