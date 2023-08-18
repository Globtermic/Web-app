import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import fr from './traductions/fr';
import es from './traductions/es';
import en from './traductions/en';
import i18n from 'i18next';

const LANGUAGES = {
    es,
    en,
    fr
}

i18n
.use(initReactI18next)
.use(LanguageDetector)
.init({
    detection: {order: ["navigator", "path"]},
    fallbackLng: 'fr',
    resources: LANGUAGES,
})