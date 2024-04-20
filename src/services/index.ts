import { constants } from "@constants";
import { healthRouter } from "./health";
import type { Express } from "express";
import { joinUrls, responseObject } from "@utils";
import routers from "@routers";

const servicesLoader = [
  {
    path: joinUrls(constants.urls.health.entry().path),
    handler: [healthRouter],
  },
  {
    path: joinUrls(constants.urls.user.entry().path),
    handler: [routers.user],
  },
];

export const loadServices = (app: Express) => {
  servicesLoader.map((service) => {
    console.log(service.path);
    app.use(service.path, ...service.handler);
  });

  app.use("*", (...rest) => {
    responseObject({
      res: rest[1],
      message: "Resource not found",
      statusCode: 404,
    });
  });
};
