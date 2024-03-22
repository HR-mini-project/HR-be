"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class employee extends Model {
        /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
        static associate(models) {
            this.belongsTo(models.authorization, {
                foreignKey: "authorization_id",
            });
            this.belongsTo(models.employee_document, {
                foreignKey: "employees_document_id",
            });
            this.belongsTo(models.departement, {
                foreignKey: "departement_id",
            });
            this.hasMany(models.attendance, {
                foreignKey : "nip"
            });
        }
    }
    employee.init(
        {
            nip: {
                type: DataTypes.STRING,
                primaryKey: true,
            },
            nama: DataTypes.STRING,
            password: DataTypes.STRING,
            position: DataTypes.STRING,
            email: DataTypes.STRING,

            authorization_id: {
                type: DataTypes.INTEGER,
            },

            departement_id: {
                type: DataTypes.INTEGER,
            },

            employees_document_id: {
                type: DataTypes.INTEGER,
            },
        },
        {
            sequelize,
            modelName: "employee",
        },
    );
    return employee;
};
