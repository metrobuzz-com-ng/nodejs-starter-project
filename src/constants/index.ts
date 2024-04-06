import { i18n } from "./i18n";

export const constants = {
  defaults: {
    currentLanguage: "en",
    environment: "development",
    appPort: 7000,
  },
  i18n: {
    ...i18n,
  },
};
