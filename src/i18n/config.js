import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { defaultLocale, translations } from "../locales";

const resources = {
  ru: { translation: translations.ru },
  en: { translation: translations.en },
  ky: { translation: translations.ky },
};

// Get saved language from localStorage or use default
const getSavedLanguage = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("preferred-language") || defaultLocale;
  }
  return defaultLocale;
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getSavedLanguage(),
    fallbackLng: "ky",
    interpolation: { escapeValue: false },
    returnObjects: true,
    initImmediate: false,
  })
  .catch((err) => console.error("i18n init error", err));

export default i18n;
