"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class authorization extends Model {
        /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
        static associate(models) {
            this.hasMany(models.employee, {
                foreignKey: "authorization_id",
            });
        }
    }
    authorization.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
            },
            level: DataTypes.STRING,
            createdAt: {
                type: DataTypes.DATE,
                defaultValue: sequelize.NOW,
            },
            updatedAt: {
                type: DataTypes.DATE,
                defaultValue: sequelize.NOW,
            },
        },
        {
            sequelize,
            modelName: "authorization",
        },
    );
    return authorization;
};
