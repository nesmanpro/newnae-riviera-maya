import { useContext } from 'react'
import { I18nContext } from './I18nProvider'

export const useI18n = () => {
    const context = useContext(I18nContext)
    if (!context) {
        throw new Error('useI18n debe usarse dentro de un I18nProvider')
    }
    return context
}
