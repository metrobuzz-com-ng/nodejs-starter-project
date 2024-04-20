import { constants } from "@constants";
import type { Express } from "express";
import utils from "@utils";
import routers from "@routers";
import { getters, HttpStatusCode } from "@config";

const servicesLoader = [
  {
    path: utils.joinUrls(constants.urls.health.entry().path),
    handler: [routers.health],
  },
  {
    path: utils.joinUrls(constants.urls.user.entry().path),
    handler: [routers.user],
  },
];

export const loadServices = (app: Express) => {
  servicesLoader.map((service) => {
    console.log(service.path);
    app.use(service.path, ...service.handler);
  });

  app.use("*", (...rest) => {
    utils.responseObject({
      res: rest[1],
      message: getters.geti18ns().LOGS.ROUTES.WILDCARD,
      statusCode: HttpStatusCode.NotFound,
    });
  });
};
