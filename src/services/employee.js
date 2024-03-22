const addTrackingTime = require("../../utils/addTrackingTime")
const updateStampReq = require("../../utils/updateStamp")
const { STATUS_CODE } = require("../constant")
const attendanceDataAccess = require("../repository/attendance")
const employeeDataAccess = require("../repository/employee")
const employeeDocumentDataAccess = require("../repository/employeeDocument")

const employeeServices = {}

employeeServices.getAllEmployees = async (req,res) => {
    const limit = req.query.limit
    const page = ( req.query.page -  1 ) * limit
    try {
        
        const employees = await employeeDataAccess.getAll(page,limit)
        return res.status(STATUS_CODE.SUCCESS).send(employees)
    } catch (error) {
        return res.status(STATUS_CODE.SERVER_ERROR).send({message:"something happen when fetching employees"})
    }
}

employeeServices.getEmployee = async (req,res)=>{
    const nip = req.params.id
    try {
        const employee = await employeeDataAccess.getOne(nip) 
        return res.status(STATUS_CODE.SUCCESS).send(employee)
    } catch (error) {
        return res.status(STATUS_CODE.SERVER_ERROR).send({message:error.toString()})
    }
}

employeeServices.getProfileEmployeeDetail = async (req,res)=>{
    const nip = req.params.id
    try {
        const employee = employeeDataAccess.getOne(nip)
        const document =  employeeDocumentDataAccess.getAllDocumentFromEmployee(nip)
        const result = await Promise.all([employee,document])
        const empDetail = {...result}
        return res
            .status(STATUS_CODE.SUCCESS).send(empDetail)

    } catch (error) {
        return res.status(STATUS_CODE.SERVER_ERROR).send({message:"Something happen when fetching employee profile service"})
    }
}

employeeServices.getEmployeeAttendances = async (req,res)=>{
    const nip = req.params.id
    const limit = req.query.limit
    const page = ( ( req.query.page ) - 1  ) * limit
    try {
        const employee =  employeeDataAccess.getOne(nip)
        const attendances =  attendanceDataAccess.getAll(page,limit,nip)
        const result = await Promise.all([employee,attendances])
        const empAttend = {...result}
        return res.status(STATUS_CODE.SUCCESS).send(empAttend)

    } catch (error) {
        return res.status(STATUS_CODE.SERVER_ERROR).send({message: "Something happen when fetching employee attendances services"})       
    }
}

employeeServices.updateEmployeeData = async (req,res) => {
    const nip = req.params.id
    updateStampReq(req.body)
    try {
        const updatedEmployee = await employeeDataAccess.update(nip)

        return res.status(STATUS_CODE.SUCCESS).send({message:"Update employe success",updatedEmployee
        })
    } catch (error) {
        return res.status(STATUS_CODE.SERVER_ERROR).send({message:"Something happen when updating employee data"})
    }
}

employeeServices.createEmployee = async (req,res) => {
    defaultEmployeeValue(req)
    
    try {
        const newEmployee = await employeeDataAccess.createOne(req.body)
        return res.status(STATUS_CODE.SUCCESS).send({message:"Create Employee success",newEmployee
        })
    } catch (error) {
        return res.status(STATUS_CODE.SERVER_ERROR).send({message:"Something happen when creating employee"})
    }
}

employeeServices.deleteEmployee = async (req,res) => {
    const nip = req.params.id
    try {
        const deletedStatus = await employeeDataAccess.deleteOne(nip)
        return res.status(STATUS_CODE.SUCCESS).send({message:"Delete employee successful", deletedStatus})
    } catch (error) {
        return res.status(STATUS_CODE.SERVER_ERROR).send({message:error.toString()})
    }
}


module.exports = employeeServices

function defaultEmployeeValue(req){
    req.body.nip = generateNip() 
    req.body.authorization_id = 2
    addTrackingTime(req.body)
}
