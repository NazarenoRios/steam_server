import { DataTypes } from "sequelize";
import { UserInstance } from "../interfaces/user.interface";
import db from "../db";

const User = db.define<UserInstance>(
  "User",
  {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    salt: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    lastname: {
      type: DataTypes.STRING,
    },
    country: {
      type: DataTypes.STRING,
    },
    state: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    zip: {
      type: DataTypes.INTEGER,
    },
    phone: {
      type: DataTypes.BIGINT,
    },
    admin: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    modelName: "User",
    tableName: "users",
    timestamps: false,
    // underscore: true,
  }
);

export default User;
