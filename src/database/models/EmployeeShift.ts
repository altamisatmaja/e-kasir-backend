'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EmployeeShift extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EmployeeShift.init({
    shift_date: DataTypes.DATE,
    shift_start: DataTypes.TIME,
    shift_end: DataTypes.TIME,
    employee_id: DataTypes.INTEGER,
    business_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'EmployeeShift',
    underscored: true,
  });
  return EmployeeShift;
};