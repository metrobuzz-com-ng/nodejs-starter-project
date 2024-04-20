import { routeCreator } from "@utils";

export const urls = {
  health: {
    entry: () => routeCreator("health"),
    check: () => routeCreator("check"),
  },
  user: {
    entry: () => routeCreator("user"),
    getAllUsers: () => routeCreator("all"),
  },
};
