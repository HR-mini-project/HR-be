'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class attendance_status extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
        this.hasMany(models.attendance,{foreignKey:"attendance_status_id"})
    }
  }
  attendance_status.init({
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true
    },
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'attendance_status',
  });
  return attendance_status;
};
