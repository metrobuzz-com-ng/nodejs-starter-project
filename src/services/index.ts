import { constants } from "@constants";
import { healthRouter } from "./health";
import type { Express } from "express";
import { joinUrls } from "@utils";

const servicesLoader = [
  {
    path: joinUrls(constants.urls.health.entry().path),
    handler: [healthRouter],
  },
];

export const loadServices = (app: Express) => {
  servicesLoader.map((service) => {
    console.log(service.path);
    app.use(service.path, ...service.handler);
  });
};
