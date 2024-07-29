import { DataTypes, Sequelize, Model, Optional } from "sequelize";
import sequelizeConnection from "../../config/dbConnection";

interface OwnerAttributes {
  id?: number,
  name?: string,

  business_id?: number,

  createdAt?: Date,
  updatedAt?: Date,
}

export interface OwnerInput extends Optional<OwnerAttributes, 'id'> { }
export interface OwnerOutput extends Required<OwnerAttributes> { }

class Owner extends Model<OwnerAttributes, OwnerInput> implements OwnerAttributes {
  public id?: number;
  public name!: string;

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
  name: {
    allowNull: false,
    type: DataTypes.STRING,
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
  modelName: 'Owners',
  tableName: 'owner',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  sequelize: sequelizeConnection,
  underscored: false,
});