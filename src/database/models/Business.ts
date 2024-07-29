import { DataTypes, Sequelize, Model, Optional } from 'sequelize';
import sequelizeConnection from '../../config/dbConnection';
import Owner from './Owner';

interface BusinessAttributes {
  id?: number,
  business_name?: string | null,
  business_picture?: string | null,
  business_province?: string | null,
  business_city?: string | null,
  business_sub_district?: string | null,
  business_address_detail?: string | null,
  business_category_id?: number,
  owner_id?: number,

  created_at?: Date,
  updated_at?: Date,
}

export interface BusinessInput extends Optional<BusinessAttributes, 'id'> { }
export interface BusinessOutput extends Required<BusinessAttributes> { }

class Business extends Model<BusinessAttributes, BusinessInput> implements BusinessAttributes {
  public id?: number;
  public business_name?: string | null;
  public business_picture?: string | null;
  public business_province?: string | null;
  public business_city?: string | null;
  public business_sub_district?: string | null;
  public business_address_detail?: string | null;
  public business_category_id!: number;
  public owner_id!: number;

  public readonly created_at!: Date;
  public readonly updated_at!: Date;

  public static associate() {
    Business.belongsTo(Owner, {
      foreignKey: 'owner_id',
      as: 'owners',
    });
  }
}

export default Business.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.BIGINT
  },
  business_name: {
    type: DataTypes.STRING,
  },
  business_picture: {
    type: DataTypes.STRING,
  },
  business_province: {
    type: DataTypes.STRING,
  },
  business_city: {
    type: DataTypes.STRING,
  },
  business_sub_district: {
    type: DataTypes.STRING,
  },
  business_address_detail: {
    type: DataTypes.STRING,
  },
  business_category_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "business_categories",
      key: "id",
    },
    onDelete: "CASCADE",
  },
  owner_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "business_categories",
      key: "id",
    },
    onDelete: "CASCADE",
  },
}, {
  modelName: 'businesses',
  tableName: 'businesses',
  timestamps: true,
  sequelize: sequelizeConnection,
  underscored: true,
});