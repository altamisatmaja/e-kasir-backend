import { DataTypes, Sequelize, Model, Optional } from "sequelize";
import sequelizeConnection from "../../config/dbConnection";

interface InventoryTransactionAttributes {
  id?: number,
  transacion_date?: Date,
  transacion_type?: 'Penambahan' | 'Pengurangan',
  qty?: number,

  inventory_id?: number,

  createdAt?: Date,
  updatedAt?: Date,
}

export interface InventoryTransactionInput extends Optional<InventoryTransactionAttributes, 'id'> { }
export interface InventoryTransactionOutput extends Required<InventoryTransactionAttributes> { }

class InventoryTransaction extends Model<InventoryTransactionAttributes, InventoryTransactionInput> implements InventoryTransactionAttributes {
  public id?: number;
  public transacion_date!: Date;
  public transacion_type!: 'Penambahan' | 'Pengurangan';
  public qty!: number;

  public inventory_id!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default InventoryTransaction.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.BIGINT
  },
  transacion_date: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  transacion_type: {
    allowNull: false,
    type: DataTypes.ENUM('Penambahan', 'Pengurangan'),
  },
  qty: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  inventory_id: {
    allowNull: false,
    references: {
      model: "inventories",
      key: "id",
    },
    type: DataTypes.BIGINT,
    onDelete: "CASCADE",
  },
}, {
  modelName: 'inventory_transactions',
  tableName: 'inventory_transaction',
  timestamps: true,
  sequelize: sequelizeConnection,
  underscored: false,
});