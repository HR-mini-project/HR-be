"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class employee_document extends Model {
        /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
        static associate(models) {
            this.hasOne(models.employee, {
                foreignKey: "employees_document_id",
            });
        }
    }
    employee_document.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
            },
            portofolio: DataTypes.STRING,
            other_document: DataTypes.STRING,
            cv: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "employee_document",
        },
    );
    return employee_document;
};
