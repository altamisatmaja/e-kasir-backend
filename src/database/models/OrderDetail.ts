import { DataTypes, Sequelize, Model, Optional } from "sequelize";
import sequelizeConnection from "../../config/dbConnection";

interface OrderDetailAttributes {
  id?: number,
  qty?: number,
  total_price?: number,

  order_id?: number,
  product_id?: number,

  createdAt?: Date,
  updatedAt?: Date,
}

export interface OrderDetailInput extends Optional<OrderDetailAttributes, 'id'> { }
export interface OrderDetailOutput extends Required<OrderDetailAttributes> { }

class OrderDetail extends Model<OrderDetailAttributes, OrderDetailInput> implements OrderDetailAttributes {
  public id?: number;
  public qty!: number;
  public total_price!: number;

  public order_id!: number;
  public product_id!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default OrderDetail.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.BIGINT
  },
  qty: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  total_price: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  order_id: {
    allowNull: false,
    type: DataTypes.BIGINT,
    references: {
      model: "orders",
      key: "id",
    },
    onDelete: "CASCADE",
  },
  product_id: {
    type: DataTypes.BIGINT,
      references: {
        model: "products",
        key: "id",
      },
      onDelete: "CASCADE",
  },
}, {
  modelName: 'order_details',
  tableName: 'order_details',
  timestamps: true,
  sequelize: sequelizeConnection,
  underscored: false,
});