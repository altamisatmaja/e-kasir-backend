import { DataTypes, Sequelize, Model, Optional } from "sequelize";
import sequelizeConnection from "../../config/dbConnection";

interface OrderAttributes {
  id?: number,
  customer_name?: string,
  total_amount?: number,
  cash_received?: number,
  change_due?: number,
  sale_date?: Date,

  employee_id?: number,
  business_id?: number,

  createdAt?: Date,
  updatedAt?: Date,
}

export interface OrderInput extends Optional<OrderAttributes, 'id'> { }
export interface OrderOutput extends Required<OrderAttributes> { }

class Order extends Model<OrderAttributes, OrderInput> implements OrderAttributes {
  public id?: number;
  public customer_name!: string;
  public total_amount!: number;
  public cash_received!: number;
  public change_due!: number;
  public sale_date!: Date;

  public employee_id!: number;
  public business_id!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default Order.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.BIGINT
  },
  customer_name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  total_amount: {
    type: DataTypes.INTEGER,
  },
  cash_received: {
    type: DataTypes.INTEGER,
  },
  change_due: {
    type: DataTypes.INTEGER,
  },
  sale_date: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  employee_id: {
    allowNull: false,
    type: DataTypes.BIGINT,
    references: {
      model: "employees",
      key: "id",
    },
    onDelete: "CASCADE",
  },
  business_id: {
    allowNull: false,
    type: DataTypes.BIGINT,
    references: {
      model: "businesses",
      key: "id",
    },
    onDelete: "CASCADE",
  },
}, {
  modelName: 'orders',
  tableName: 'orders',
  timestamps: true,
  sequelize: sequelizeConnection,
  underscored: false,
});