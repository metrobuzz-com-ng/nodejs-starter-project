import { responseObject } from "@utils";
import type { RequestHandler } from "express";

const checkServiceHealth: RequestHandler = (...rest) => {
  const res = rest[1];

  return responseObject({
    res,
    message: "Service is up and running fine",
    statusCode: 200,
  });
};

export default { checkServiceHealth };
