import { sequelize } from "@config";
import { UserInstance } from "@types";
import { DataTypes } from "sequelize";

export const User = sequelize.define<UserInstance>(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "users",
    timestamps: true,
  },
);
