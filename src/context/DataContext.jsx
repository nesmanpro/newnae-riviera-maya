import { createContext, useMemo, useContext } from 'react'
import dataES from '../data/departments.es.json'
import dataEN from '../data/departments.en.json'
import { I18nContext } from '../i18n/I18nProvider'

export const DataContext = createContext(null)

export function DataProvider({ children }) {
    const { currentLanguage } = useContext(I18nContext)

    const departments = useMemo(() => {
        return currentLanguage === 'es' ? dataES : dataEN
    }, [currentLanguage])

    const value = {
        departments,
        getById: (id) => departments.find(dep => dep.id === id)
    }

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    )
}
