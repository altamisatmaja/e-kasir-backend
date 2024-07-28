'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class InventoryTransaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  InventoryTransaction.init({
    transacion_date: DataTypes.DATE,
    transacion_tpye: DataTypes.STRING,
    qty: DataTypes.INTEGER,
    inventory_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'InventoryTransaction',
    underscored: true,
  });
  return InventoryTransaction;
};