import { responseObject } from "@utils";
import type { RequestHandler } from "express";

export const checkServiceHealth: RequestHandler = (...rest) => {
  const res = rest[1];

  return responseObject({
    res,
    message: "Service is up and running fine",
    statusCode: 200,
  });
};
