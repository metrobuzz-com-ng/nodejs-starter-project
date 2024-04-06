import { constants } from "@constants";
import type { RouteHandler } from "@types";
import express from "express";
import { joinUrls } from "@utils";
import { checkServiceHealth } from "./health.controller";

const router = express.Router();

const serviceLoader: RouteHandler[] = [
  {
    path: joinUrls([constants.urls.health.check().path]),
    method: constants.urls.health.check().method,
    handlers: [checkServiceHealth],
  },
];

serviceLoader.map((service) => {
  router[service.method](service.path, ...service.handlers);
});

export { router };
