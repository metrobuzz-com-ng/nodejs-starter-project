import mongoose from "mongoose";
import { getters } from "./getters";

const databaseUri = getters.getDatabaseUri();

export const databaseConnect = async () => {
  console.log("Attempting to connect to database...");
  let message = "Unable to connect to the database";
  try {
    await mongoose.connect(databaseUri);

    message = "Database connection successful";
  } catch (error) {
    message = "Unable to connect to the database";
  } finally {
    console.log(message);
  }
};
