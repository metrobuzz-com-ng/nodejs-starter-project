import { RequestHandler } from "express";
import dbQueries from "@database";
import utils from "@utils";
import { HttpStatusCode, getters } from "@config";
import { User } from "@types";

const viewUsers: RequestHandler = async (req, res) => {
  let statusCode = HttpStatusCode.InternalServerError;
  let message =
    getters.geti18ns().LOGS.ROUTES.USER.VIEW_ALL_USERS.CRITICAL_ERROR;
  let payload: User[] = [];
  try {
    const users = await dbQueries.user.findAllUsers();

    if (!users) {
      statusCode = HttpStatusCode.NotFound;
      throw new Error(
        getters.geti18ns().LOGS.ROUTES.USER.VIEW_ALL_USERS.NOT_FOUND,
      );
    }

    statusCode = HttpStatusCode.OK;
    message = getters.geti18ns().LOGS.ROUTES.USER.VIEW_ALL_USERS.SUCCESS;
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
