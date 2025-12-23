import { useParams } from 'react-router-dom'
import { useDepartments } from '../../hooks/useDepartments'
import { ItemDetail } from './ItemDetail'

export const ItemDetailContainer = () => {
    const { id } = useParams()
    const { getById } = useDepartments()

    const departamento = getById(id)

    if (!departamento) return <div>Departamento no encontrado</div>

    return (
        <div>
            <ItemDetail item={departamento} />
        </div>
    )
}
