import { User } from "@types";
import { Schema, model } from "mongoose";

const userSchema = new Schema<User>(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const userModel = model("users", userSchema);

export default userModel;
