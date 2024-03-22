"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class departement extends Model {
        /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
        static associate(models) {
            // define association here
            this.hasMany(models.employee, {
                foreignKey: "departement_id",
            });
        }
    }
    departement.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
            },
            name: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "departement",
        },
    );
    return departement;
};
