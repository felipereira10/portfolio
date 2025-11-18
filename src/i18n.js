import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      options: "Options",
      hello: "Hello"
    }
  },
  pt: {
    translation: {
      options: "Opções",
      hello: "Olá"
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "pt",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;