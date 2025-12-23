// i18nProvider.js
import { createContext, useState } from 'react'
import i18n from 'i18next'
import { I18nextProvider, initReactI18next } from 'react-i18next'
import EN from './locale/en.json'
import ES from './locale/es.json'

export const I18nContext = createContext()

const supportedLang = ['en', 'es']
const defaultLang = 'en'


i18n.use(initReactI18next).init({
    resources: { en: EN, es: ES },
    lng: localStorage.getItem('lng') || defaultLang,
    fallbackLng: defaultLang,
    interpolation: { escapeValue: false },
})

export const I18nProvider = ({ children }) => {
    const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem('lng') || defaultLang)

    const changeLanguage = (lng) => {
        if (supportedLang.includes(lng)) {
            i18n.changeLanguage(lng)
            setCurrentLanguage(lng)
            localStorage.setItem('lng', lng)
        }
    }

    return (
        <I18nContext.Provider value={{ currentLanguage, changeLanguage }}>
            <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
        </I18nContext.Provider>
    )
}
