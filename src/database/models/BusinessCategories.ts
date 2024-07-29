import { DataTypes, Sequelize, Model, Optional } from "sequelize";
import sequelizeConnection from "../../config/dbConnection";

interface BusinessCategoriesAttributes {
  id?: number,
  name?: string,
}

export interface BusinessCategoriesInput extends Optional<BusinessCategoriesAttributes, 'id'> { }
export interface BusinessCategoriesOutput extends Required<BusinessCategoriesAttributes> { }

class BusinessCategories extends Model<BusinessCategoriesAttributes, BusinessCategoriesInput> implements BusinessCategoriesAttributes {
  public id?: number;
  public name!: string;
}

export default BusinessCategories.init({
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
}, {
  modelName: 'business_categories',
  tableName: 'business_categories',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  sequelize: sequelizeConnection,
  underscored: true,
});