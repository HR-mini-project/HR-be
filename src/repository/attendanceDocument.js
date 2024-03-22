const { MODELS_PATH, STATUS_CODE } = require("../constant")
const { attendance_document } = require(MODELS_PATH)

const attendanceDocumentDataAccess = {}

attendanceDocumentDataAccess.getOne = async (id) => {
    try {
        const document = await attendance_document.findOne({where:{ attendance_id:id }}) 
        return document
    } catch (error) {
        throw new Error("something happen when getting document")
    }
}

attendanceDocumentDataAccess.updateDocument = async (id,form) => {
    try {
        const updatedDocument = await attendance_document.findOne({where:{attendance_id:id}})
        await updatedDocument.update(form)
        return updatedDocument
    } catch (error) {
        throw new Error("Something happen when updating document")
    }
}

attendanceDocumentDataAccess.deleteDocument = async (doc_id) => {
    try {
        const deletedDocument = await attendance_document.destroy({where:{id:doc_id}})
        return deletedDocument 
    } catch (error) {
        throw new Error("Something happen when deleting attendance document")
    }
}

module.exports = attendanceDocumentDataAccess
