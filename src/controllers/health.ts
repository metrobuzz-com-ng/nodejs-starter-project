import { HttpStatusCode, getters } from "@config";
import utils from "@utils";
import type { RequestHandler } from "express";

const checkServiceHealth: RequestHandler = (...rest) => {
  const res = rest[1];

  return utils.responseObject({
    res,
    message: getters.geti18ns().LOGS.ROUTES.HEALTH.CHECK.SUCCESS,
    statusCode: HttpStatusCode.OK,
  });
};

export default { checkServiceHealth };
