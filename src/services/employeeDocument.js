const { STATUS_CODE } = require("../constant")
const employeeDocumentDataAccess = require("../repository/employeeDocument")

const employeeDocumentServices = {}

employeeDocumentServices.getPortofolio = async (req,res) => {
    const rowId = req.query.id
    try {
        const portofolio = await employeeDocumentDataAccess.getEmployeePortofolio(rowId)
        return res.status(STATUS_CODE.SUCCESS).send({portofolio})
    } catch (error) {
        return res.status(STATUS_CODE.SERVER_ERROR).send({message: "Something happen when getting portofolio"})
    }
} 

employeeDocumentServices.getCv = async (req,res) => {
    const rowId = req.query.id
    try {
        const cv = await employeeDocumentDataAccess.getEmployeeCv(rowId)
        return res.status(STATUS_CODE.SUCCESS).send({cv})
    } catch (error) {
        return res.staus(STATUS_CODE.SERVER_ERROR).send({message:"Something happen when getting cv"})
    }
}

employeeDocumentServices.getOhterDocument = async (req,res) => {
    const rowId = req.query.id
    try {
        const cv = await employeeDocumentDataAccess.getEmployeeCv(rowId)
        return res.status(STATUS_CODE.SUCCESS).send({cv})
    } catch (error) {
        return res.staus(STATUS_CODE.SERVER_ERROR).send({message:"Something happen when getting cv"})
    }
}

employeeDocumentServices.updatePortofolio = async (req,res) => {
}

employeeDocumentServices.updateCv = async (req,res) => {
}

employeeDocumentServices.updateOtherDocument = async (req,res) => {
}
module.exports = employeeDocumentServices
