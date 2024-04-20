import { RequestHandler } from "express";
import dbQueries from "@database";
import utils from "@utils";
import { UserInstance } from "@types";

const viewUsers: RequestHandler = async (req, res) => {
  let statusCode = 500;
  let message = "A critical error has occurred";
  let payload: UserInstance[] = [];
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
    utils.responseObject({
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
