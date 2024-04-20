import { Sequelize } from "sequelize";
import { getters } from "./getters";

const databaseUri = getters.getDatabaseUri();

export const sequelize = new Sequelize(databaseUri);

export const databaseConnect = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
