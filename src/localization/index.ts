import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { englishTranslation } from "./english";
import { russianTranslation } from "./russian/index";

const resources = {
  en: {
    translation: englishTranslation,
  },
  ru: {
    translation: russianTranslation,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("lang") || "ru",
  interpolation: {
    escapeValue: false,
  },
});

export type Language = keyof typeof resources;

export default i18n;
