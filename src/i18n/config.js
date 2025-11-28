import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { defaultLocale, translations } from "../locales";

const resources = {
  ru: { translation: translations.ru },
  en: { translation: translations.en },
  ky: { translation: translations.ky },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: defaultLocale,
    fallbackLng: "ky",
    interpolation: { escapeValue: false },
    returnObjects: true,
  })
  .catch((err) => console.error("i18n init error", err));

export default i18n;
