import { DataTypes, Sequelize, Model, Optional } from 'sequelize';
import sequelizeConnection from '../../config/dbConnection';

interface RoleAttributes {
  id?: number,
  role?: string | null,
  active?: boolean | null,

  createdAt?: Date,
  updatedAt?: Date,
}

export interface RoleInput extends Optional<RoleAttributes, 'id'>{ }
export interface RoleOutput extends Required<RoleAttributes>{ }

class Role extends Model<RoleAttributes, RoleInput> implements RoleAttributes {
  public id?: number;
  public role!: string | null;
  public active!: boolean | null;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default Role.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.BIGINT
  },
  role: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  active: {
    allowNull: true,
    type: DataTypes.BOOLEAN,
  },
}, {
  modelName: 'Roles',
  timestamps: true,
  sequelize : sequelizeConnection,
  underscored: false,
});