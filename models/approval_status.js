"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class approval_status extends Model {
        /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
        static associate(models) {
            // define association here
            this.hasMany(models.attendance, { foreignKey: "approval_status_id" });
        }
    }
    approval_status.init(
        {
            approval_status: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            id: {
                primaryKey: true,
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: "approval_status",
        },
    );
    return approval_status;
};
