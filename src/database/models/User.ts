import { DataTypes, Sequelize, Model, Optional } from "sequelize";
import sequelizeConnection from "../../config/dbConnection";

interface UserAttributes {
  id: number,
  username: string,
  email: string,
  password: string,
  role: 'Admin' | 'Pemilik Usaha' | 'Pegawai',
  created_at?: Date,
  updated_at?: Date,
}

export interface UserInput extends Optional<UserAttributes, 'id'> { }
export interface UserOutput extends Required<UserAttributes> { }

class User extends Model<UserAttributes, UserInput> implements UserAttributes {
  public id!: number;
  public username!: string;
  public email!: string;
  public password!: string;
  public role!: 'Admin' | 'Pemilik Usaha' | 'Pegawai';
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

User.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.BIGINT
  },
  username: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  role: {
    allowNull: false,
    type: DataTypes.ENUM('Admin', 'Pemilik Usaha', 'Pegawai'),
  },
  created_at: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updated_at: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  modelName: 'users',
  tableName: 'users',
  timestamps: true,
  sequelize: sequelizeConnection,
  underscored: true,
});

export default User;
