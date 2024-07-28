import { DataTypes, Sequelize, Model, Optional } from "sequelize";
import sequelizeConnection from "../../config/dbConnection";

interface OwnerAttributes {
  id?: number,
  full_name?: string,
  date_of_birth?: Date,
  gender?: 'Laki-laki' | 'Perempuan',

  user_id?: number,

  createdAt?: Date,
  updatedAt?: Date,
}

export interface OwnerInput extends Optional<OwnerAttributes, 'id'> { }
export interface OwnerOutput extends Required<OwnerAttributes> { }

class Owner extends Model<OwnerAttributes, OwnerInput> implements OwnerAttributes {
  public id?: number;
  public full_name!: string;
  public date_of_birth!: Date;
  public gender!: 'Laki-laki' | 'Perempuan';

  public user_id!: number;

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
  full_name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  date_of_birth: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  gender: {
    allowNull: false,
    type: DataTypes.ENUM('Laki-laki', 'Perempuan'),
  },
  user_id: {
    allowNull: false,
        references: {
          model: "users",
          key: "id"
        },
        type: DataTypes.BIGINT,
        onDelete: "CASCADE",
  },
}, {
  modelName: 'owners',
  tableName: 'owners',
  timestamps: true,
  sequelize: sequelizeConnection,
  underscored: false,
});