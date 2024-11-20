import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend'
import  LanguageDetector  from "i18next-browser-languagedetector";
import uzTranslation from '../public/locales/uz.json'
import ruTranslation from '../public/locales/ru.json'
import enTranslation from '../public/locales/en.json'

const language = localStorage.getItem('i18nextLng') || 'uz'

i18next
.use(Backend)
//tilni aniqlash
.use(LanguageDetector)
// bog'lash
.use(initReactI18next)
.init({
    fallbackLng: 'eng',
    lng: language,
    debug: true,
    resources: {
        uz:{translation: uzTranslation},
        ru:{translation: ruTranslation},
        en:{translation: enTranslation},
    }
})

export default i18next;
