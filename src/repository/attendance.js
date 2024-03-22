const db = require("../../models");
const attendance = require("../../models/attendance")(db.sequelize,db.Sequelize);
const attendanceDataAccess = {};

attendanceDataAccess.create = async (form) => {
    try {
        const newAttendance = await attendance.create(form);
        return newAttendance;
    } catch (error) {
        throw new Error("Something happen when creating attendance");
    }
};

attendanceDataAccess.getAll = async (page, limit) => {
    try {
        const attendances = await attendance.findAll({ limit, offset: page });
        return attendances;
    } catch (error) {
        throw new Error("Something happen when fetching attendances");
    }
};

attendanceDataAccess.getOne = async (page, limit, id) => {
    try {
        const attendances = await attendance.findAll({
            limit,
            offset: page,
            where: { nip: id },
        });
        return attendances;
    } catch (error) {
        throw new Error(
            "Something happen when fetching attendance",
            error.toString(),
        );
    }
};

attendanceDataAccess.deleteOne = async (id) => {
    const deletedStatus = await attendance.destroy({ where: { id } });
    if (!deletedStatus) throw new Error("attendance not found");
    return deletedStatus;
};

attendanceDataAccess.update = async (id, form) => {
    try {
        const updatedAttendance = await attendance.findByPk(id);
        await updatedAttendance.update(form);
        return updatedAttendance;
    } catch (error) {
        throw new Error("Something happen when updating attendance");
    }
};
module.exports = attendanceDataAccess;
