
const db = require("../../models");
const employee = require("../../models/employee")(db.sequelize,db.Sequelize);
const { STATUS_CODE } = require("../constant");

const employeeDataAccess = {}

employeeDataAccess.getOne = async (nip)=>{
        const selectedEmp = await employee.findOne({where:{nip}})
        
        if(!selectedEmp) throw new Error("Employee not found")
        return selectedEmp 

}

employeeDataAccess.getAll = async (page,limit)=>{
    try {
        const employees = await employee.findAll({limit,offset:page })
        return employees 
    } catch (error) {
        throw new Error("Something happen when fetching employees")
    }
}

employeeDataAccess.createOne = async (form) =>{
    try {
        const createdEmployee = await employee.create(form)
        return createdEmployee 

    } catch (error) {
        throw new Error("Something happen when creating employee")
    }
}

employeeDataAccess.update = async (id,form) => {
    if (error) return res.status(STATUS_CODE.ERROR.BAD_REQUEST).send({message:"something happend in server"})
    
    try {
        const updatedEmployee = await employee.findByPk(id)
        await updatedEmployee.update({...form})
        return updatedEmployee
    } catch (error) {
        throw new Error("Something happen when updating employee")
    }
}

employeeDataAccess.deleteOne = async (nip) =>{
        const deletedEmployee = await employee.destroy({where:{nip}})
        console.log(deletedEmployee)
        if (isNull(deletedEmployee))  throw new Error("Employee not found") 
        return deletedEmployee
}

module.exports = employeeDataAccess

function isNull(obj){
    if (!obj || obj.length === 0 || obj===0) return true
    return false
}


