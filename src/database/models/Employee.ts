'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Employee.init({
    full_name: DataTypes.STRING,
    employee_address_detail: DataTypes.STRING,
    date_of_birth: DataTypes.DATE,
    gender: DataTypes.STRING,
    work_at: DataTypes.DATE,
    is_active: DataTypes.BOOLEAN,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Employee',
    underscored: true,
  });
  return Employee;
};