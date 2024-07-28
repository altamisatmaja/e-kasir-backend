import { DataTypes, Sequelize, Model, Optional } from "sequelize";
import sequelizeConnection from "../../config/dbConnection";

interface UserAttributes {
  id?: number,
  username?: string,
  email?: string,
  password?: string,

  role?: string[],

  createdAt?: Date,
  updatedAt?: Date,
}

export interface UserInput extends Optional<UserAttributes, 'id'> { }
export interface UserOutput extends Required<UserAttributes> { }

class User extends Model<UserAttributes, UserInput> implements UserAttributes {
  public id?: number;
  public username!: string;
  public email!: string;
  public password!: string;

  public readonly role!: string[];

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default User.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.BIGINT
  },
  username: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  email: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  password: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  role: {
    allowNull: false,
    type: DataTypes.ENUM,
  },
}, {
  modelName: 'Users',
  timestamps: true,
  sequelize: sequelizeConnection,
  underscored: false,
});