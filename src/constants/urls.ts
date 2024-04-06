import { routeCreator } from "src/utils";

export const urls = {
  health: {
    entry: () => routeCreator("health"),
    check: () => routeCreator("check"),
  },
};
