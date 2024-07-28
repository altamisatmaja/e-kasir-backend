import { DataTypes, Sequelize, Model, Optional } from "sequelize";
import sequelizeConnection from "../../config/dbConnection";

interface ProductAttributes {
  id?: number,
  name?: string,
  price?: number,

  category_product_id?: number,
  business_id?: number,

  createdAt?: Date,
  updatedAt?: Date,
}

export interface ProductInput extends Optional<ProductAttributes, 'id'> { }
export interface ProductOutput extends Required<ProductAttributes> { }

class Product extends Model<ProductAttributes, ProductInput> implements ProductAttributes {
  public id?: number;
  public name!: string;
  public price!: number;

  public category_product_id!: number;
  public business_id!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default Product.init({
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
  category_product_id: {
    type: DataTypes.BIGINT,
      references: {
        model: "product_categories",
        key: "id",
      },
      onDelete: "CASCADE",
  },
  price: {
    allowNull: false,
    type: DataTypes.BIGINT,
  },
  business_id: {
    type: DataTypes.BIGINT,
      references: {
        model: "businesses",
        key: "id",
      },
      onDelete: "CASCADE",
  },
}, {
  modelName: 'products',
  tableName: 'products',
  timestamps: true,
  sequelize: sequelizeConnection,
  underscored: false,
});