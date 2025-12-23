import { useContext } from 'react'
import { DataContext } from '../context/DataContext'

export function useDepartments() {
    const context = useContext(DataContext)

    if (!context) {
        throw new Error('useDepartments debe usarse dentro de DataProvider')
    }

    return context
}
