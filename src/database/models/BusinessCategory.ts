'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BusinessCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BusinessCategory.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BusinessCategory',
    underscored: true,
  });
  return BusinessCategory;
};