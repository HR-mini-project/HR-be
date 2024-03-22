const { MODELS_PATH } = require("../constant")

const {employee_document} = require(MODELS_PATH)

const employeeDocumentDataAccess = {}

employeeDocumentDataAccess.getAllDocumentFromEmployee = async (id) => {
    try {
        const doc = await employee_document.findByPk(id)
        return doc
    } catch (error) {
        throw new Error("Something happen when accessing employee document")
    }
}
/* portofolio objek nnati = {
    id,file,portofolio_path
} */
employeeDocumentDataAccess.getEmployeePortofolio = async (id) => {
    try {
        const portofolio = await employee_document.findByPk(id,{attributes:['id','portofolio']})
        return portofolio 
    } catch (error) {
        throw new Error("Something happen when fetching portoflio")
    }
}

employeeDocumentDataAccess.getEmployeeCv = async (id) => {
    try {
        const cv = await employee_document.findByPk(id,{attributes:['id','cv']})
        return cv 
    } catch (error) {
        throw new Error("Something happen when fetching cv")
    }
}

employeeDocumentDataAccess.getEmployeeOtherDocument = async (id) => {
    try {
        const otherDocument = await employee_document.findByPk(id,{attributes:['id','other_document']})
        return otherDocument 
    } catch (error) {
        throw new Error("Something happen when fetching otherDocument")
    }
}
module.exports = employeeDocumentDataAccess
