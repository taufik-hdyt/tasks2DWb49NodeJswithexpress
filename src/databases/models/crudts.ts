import { DataTypes, Model, Optional } from "sequelize";
import sequlizeConnection from "../../config/connection";

interface DataAtrributes {
  id?: number;
  provinces?: string;
  city?: string;
  sub_district?: string;
  village?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface DataWilayahInput extends Optional<DataAtrributes, "id"> {}
export interface DataWilayahOutput extends Required<DataAtrributes> {}

export default class crudts // mewakili nama tabel
  extends Model<DataAtrributes, DataWilayahInput>
  implements DataAtrributes
{
  public id!: number;
  public provinces!: string;
  public city!: string;
  public sub_district!: string;
  public village!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

crudts.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    provinces: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    city: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    sub_district: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    village: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
    sequelize: sequlizeConnection,
  }
);
