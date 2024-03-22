"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class attendance extends Model {
        /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
        static associate(models) {
            // define association here
            this.belongsTo(models.employee,{ foreignKey: "nip" });
            this.hasOne(models.attendance_document,{ foreignKey: "attendance_id" } );
            this.belongsTo(models.approval_status,{ foreignKey: "approval_status_id" });
            this.belongsTo(models.attendance_status, {foreignKey : "attendance_status_id"});
        }
    }
    attendance.init(
        {
            nip: {
                type: DataTypes.STRING,
                primaryKey: true,
            },
            arrival: DataTypes.TIME,
            leave: DataTypes.TIME,
            date: DataTypes.DATE,
            reason: DataTypes.STRING,
            createdAt : {
                type : DataTypes.DATE,
                defaultValue : new Date()
            },
            updatedAt : {
                type : DataTypes.DATE,
                defaultValue : new Date()
            }
        },
        {
            sequelize,
            modelName: "attendance",
        },
    );
    return attendance;
};
