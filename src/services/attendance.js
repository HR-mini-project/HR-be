const addTrackingTime = require("../../utils/addTrackingTime")
const convertAttendaceConstantToString = require("../../utils/convertAttendanceConsntantToString")
const { STATUS_CODE } = require("../constant")
const attendanceDataAccess = require("../repository/attendance")

const attendanceServices = {}

attendanceServices.getEmployeeAttendance = async (req,res) => {
    const nip = req.params.id
    try {
        const attendance = await attendanceDataAccess.getOne(nip)
        convertAttendaceConstantToString(attendance)
        return res.status(STATUS_CODE.SUCCESS).send({attendance})
    } catch (error) {
        return res.status(STATUS_CODE.SERVER_ERROR).send({message:"Something happen when fetching attendance"})
    }
}

attendanceServices.getAllEmployeesAttendance = async (req,res) => {
    const limit = req.query.limit
    const page = req.query.page
    try {
        const attendances = await attendanceDataAccess.getAll(page,limit)
        attendances.forEach(att =>convertAttendaceConstantToString(att.dataValues))
        return res.status(STATUS_CODE.SUCCESS).send(attendances)
    } catch (error) {
        return res.status(STATUS_CODE.SERVER_ERROR).send({message:"something happen when getting all employees attendances"})
    }
}

attendanceServices.getAllAttendancesForOneEmployee = async (req,res) => {
    const limit = req.query.limit
    const page = req.query.page
    const nip = req.params.id
    try {
        const attendances = await attendanceDataAccess.getOne(page,limit,nip)
        attendances.forEach(att => convertAttendaceConstantToString(att.dataValues))

        return res.status(STATUS_CODE.SUCCESS).send(attendances)
    } catch (error) {
        return res.status(STATUS_CODE.SERVER_ERROR).send({message:"something happen when getting employees attendances"})
    }
}
attendanceServices.updateEmployeeAttendance = async (req,res) => {
    const id = req.params.id
    const form = req.body
    try {
        const updateAttendance = await attendanceDataAccess.update(id, form)
        return res.status(STATUS_CODE.SUCCESS).send({message:"Update Attendance successful", updateAttendance})
    } catch (error) {
        return res.status(STATUS_CODE.SERVER_ERROR).send({message:error.message})
    }
}

attendanceServices.deleteEmployeeAttendance = async (req,res) => {
    const id = req.params.id
    try {
        const deletedStatus = await attendanceDataAccess.deleteOne(id)
        return res.status(STATUS_CODE.SUCCESS).send({message:"Delete attendance successful",deletedStatus})
    } catch (error) {
        return res.status(STATUS_CODE.SERVER_ERROR).send({message:error.message})
    }
}

attendanceServices.createEmployeeAttendance = async (req,res) => {
    const form = req.body
    try {
        const createdAttendance = await attendanceDataAccess.create(form)
        return res.status(STATUS_CODE.SUCCESS).send({message:"creating Attendance successful", createdAttendance})
    } catch (error) {
        return res.status(STATUS_CODE.SERVER_ERROR).send({message:"Something happen when creating new attendancece"})
    }
}
module.exports = attendanceServices


