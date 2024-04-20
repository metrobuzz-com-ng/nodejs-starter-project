import { constants } from "@constants";
import type { RouteHandler } from "@types";
import express from "express";
import utils from "@utils";
import controllers from "@controllers";

const router = express.Router();

const serviceLoader: RouteHandler[] = [
  {
    path: utils.joinUrls([constants.urls.health.check().path]),
    method: constants.urls.health.check().method,
    handlers: [controllers.health.checkServiceHealth],
  },
];

serviceLoader.map((service) => {
  router[service.method](service.path, ...service.handlers);
});

export default router;
