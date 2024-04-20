import { RequestHandler } from "express";
import dbQueries from "../database";
import { responseObject } from "@utils";
import { User } from "@types";

const viewUsers: RequestHandler = async (req, res) => {
  let statusCode = 500;
  let message = "A critical error has occurred";
  let payload: User[] = [];
  try {
    const users = await dbQueries.user.findAllUsers();

    if (!users) {
      throw new Error("Unable to find any users");
    }

    statusCode = 200;
    message = "Successfully gotten all available users";
    payload = users;
  } catch (error) {
    const error_ = error as unknown as Error;
    message = error_.message;
  } finally {
    responseObject({
      res,
      message,
      statusCode,
      payload,
    });
  }
};

export default {
  viewUsers,
};
