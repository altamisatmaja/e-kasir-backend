import { DataTypes, Sequelize, Model, Optional } from "sequelize";
import sequelizeConnection from "../../config/dbConnection";

interface EmployeeAttributes {
  id?: number,
  full_name?: string,
  employee_address_detail?: string,
  date_of_birth?: Date,
  gender?: 'Laki-laki' | 'Perempuan',
  work_at?: Date,
  is_active?: boolean,

  user_id?: number,
  business_id?: number,

  createdAt?: Date,
  updatedAt?: Date,
}

export interface EmployeeInput extends Optional<EmployeeAttributes, 'id'> { }
export interface EmployeeOutput extends Required<EmployeeAttributes> { }

class Employee extends Model<EmployeeAttributes, EmployeeInput> implements EmployeeAttributes {
  public id?: number;
  public full_name!: string;
  public employee_address_detail!: string;
  public date_of_birth!: Date;
  public gender!: 'Laki-laki' | 'Perempuan';
  public work_at!: Date;
  public is_active!: boolean;

  public user_id!: number;
  public business_id!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default Employee.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.BIGINT
  },
  full_name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  employee_address_detail: {
    type: DataTypes.STRING(50)
  },
  date_of_birth: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  gender: {
    allowNull: false,
    type: DataTypes.ENUM('Laki-laki', 'Perempuan'),
  },
  work_at: {
    type: DataTypes.DATE
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  user_id: {
    allowNull: false,
    type: DataTypes.BIGINT,
    references: {
      model: "users",
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
  modelName: 'employees',
  tableName: 'employees',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  sequelize: sequelizeConnection,
  underscored: false,
});