import { useContext } from 'react';
import { I18nContext } from './i18nProvider';

// Hook personalizado para usar las funciones de i18n en cualquier componente
export const useI18n = () => {
    const context = useContext(I18nContext);
    if (!context) {
        throw new Error('useI18n debe ser usado dentro de un I18nProvider');
    }
    return context;
};
