'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class attendance_document extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
            this.belongsTo(models.attendance, {foreignKey: "attendance_id"})
    }
  }
  attendance_document.init({
    id : {
        primaryKey : true,
        type : DataTypes.INTEGER
    },
    file_path: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'attendance_document',
  });
  return attendance_document;
};
