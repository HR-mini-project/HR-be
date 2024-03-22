const { STATUS_CODE } = require("../constant")
const attendanceDocumentDataAccess = require("../repository/attendanceDocument")

const attendanceDocumentServices = {}

attendanceDocumentServices.getEmployeeSuppotingDocument = async (req,res) => {
    const attendanceId = req.params.id
    try {
        const attendnaceDocument = await attendanceDocumentDataAccess.getOne(attendanceId)
        return res.status(STATUS_CODE.SUCCESS).send({attendnaceDocument})
    } catch (error) {
        return res.status(STATUS_CODE.SERVER_ERROR).send({message:"Something happen when getting employee document"})
    }
}

attendanceDocumentServices.updateEmployeeSupportingDocument = async (req,res)=>{
    const attendanceId = req.params.id
    const form  = req.body
    try {
        const updatedDoc = await attendanceDocumentDataAccess.updateDocument(attendanceId,form)
        return res.status(STATUS_CODE.SUCCESS).send({message:"update attendance document successfull",updatedDoc})
    } catch (error) {
        return res.status(STATUS_CODE.SERVER_ERROR).send({message:"Something happen when getting employee document"})
    }
}

attendanceDocumentServices.deleteEmployeeDocument = async (req,res) => {
    const attendance_doc_id = req.params.id
    try {
        const deletedDoc = await attendanceDocumentDataAccess.deleteDocument(attendance_doc_id)
        return res.status(STATUS_CODE.SUCCESS).send({message:"Delete attendance document success", deletedDoc})
    } catch (error) {
        return res.status(STATUS_CODE.SERVER_ERROR).send({message:"Something happen when deleting attendance document"})
    }
}

module.exports = attendanceDocumentServices
