import { createContext, useState } from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { I18nextProvider } from 'react-i18next';
import EN from './locale/en.json';
import ES from './locale/es.json';

// Creamos el contexto para las funciones de i18n.
export const I18nContext = createContext();

// Inicializamos i18n y configuramos los recursos.
i18n.use(initReactI18next).init({
    resources: {
        en: { ...EN },
        es: { ...ES },
    },
    lng: 'en',
});

// Exportamos el proveedor de contexto que incluye I18nextProvider
export const I18nProvider = ({ children }) => {
    const [currentLanguage, setCurrentLanguage] = useState('en'); // Estado para el idioma actual

    const changeLanguage = (newLanguage) => {
        i18n.changeLanguage(newLanguage); // Cambiamos el idioma de i18n
        setCurrentLanguage(newLanguage); // Actualizamos el idioma actual
    };

    return (
        <I18nContext.Provider value={{ changeLanguage, currentLanguage }}>
            <I18nextProvider i18n={i18n}>
                {children}
            </I18nextProvider>
        </I18nContext.Provider>
    );
};
