import { DataTypes, Sequelize, Model, Optional } from "sequelize";
import sequelizeConnection from "../../config/dbConnection";

interface InventoryAttributes {
  id?: number,
  name?: string,
  total_qty?: number,
  last_updated?: Date,

  business_id?: number,

  createdAt?: Date,
  updatedAt?: Date,
}

export interface InventoryInput extends Optional<InventoryAttributes, 'id'> { }
export interface InventoryOutput extends Required<InventoryAttributes> { }

class Inventory extends Model<InventoryAttributes, InventoryInput> implements InventoryAttributes {
  public id?: number;
  public name!: string;
  public total_qty!: number;
  public last_updated!: Date;

  public business_id!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default Inventory.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.BIGINT
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  total_qty: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  last_updated: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  business_id: {
    allowNull: false,
    type: DataTypes.BIGINT,
  },
}, {
  modelName: 'inventories',
  tableName: 'inventories',
  timestamps: true,
  sequelize: sequelizeConnection,
  underscored: false,
});