import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { localStorageGetItem } from "@/utils/storageAvailable";
import { defaultLang } from "@/locales/config-lang";

import translationEn from "./langs/en.json";
import translationPt from "./langs/pt.json";
import translationEs from "./langs/es.json";

const lng = localStorageGetItem("i18nextLng", defaultLang.value);

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translations: translationEn },
      pt: { translations: translationPt },
      es: { translations: translationEs },
    },
    lng,
    fallbackLng: lng,
    ns: ["translations"],
    defaultNS: "translations",
    interpolation: {
      escapeValue: false,
    },
    debug: false,
  });

export default i18n;
