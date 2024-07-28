'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Inventory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Inventory.init({
    name: DataTypes.STRING,
    total_qty: DataTypes.INTEGER,
    last_updated: DataTypes.DATE,
    business_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Inventory',
    underscored: true,
  });
  return Inventory;
};