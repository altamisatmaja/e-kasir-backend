import { DataTypes, Sequelize, Model, Optional } from "sequelize";
import sequelizeConnection from "../../config/dbConnection";

interface OwnerAttributes {
  id?: number,
  shift_date?: Date,
  shift_start?: Date,
  shift_end?: Date,

  employee_id?: number,
  business_id?: number,

  createdAt?: Date,
  updatedAt?: Date,
}

export interface OwnerInput extends Optional<OwnerAttributes, 'id'> { }
export interface OwnerOutput extends Required<OwnerAttributes> { }

class Owner extends Model<OwnerAttributes, OwnerInput> implements OwnerAttributes {
  public id?: number;
  public full_name!: string;
  public shift_date!: Date;
  public shift_start!: Date;
  public shift_end!: Date;

  public employee_id!: number;
  public business_id!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default Owner.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.BIGINT
  },
  shift_date: {
    type: DataTypes.DATE
  },
  shift_start: {
    type: DataTypes.TIME
  },
  shift_end: {
    type: DataTypes.TIME
  },
  employee_id: {
    allowNull: false,
    references: {
      model: "employees",
      key: "id",
    },
    type: DataTypes.BIGINT,
  },
  business_id: {
    allowNull: false,
    references: {
      model: "businesses",
      key: "id",
    },
    type: DataTypes.BIGINT,
  },
}, {
  modelName: 'owners',
  tableName: 'owner',
  timestamps: true,
  sequelize: sequelizeConnection,
  underscored: false,
});