import utils from "@utils";

const { routeCreator } = utils;

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
