import { useEffect, useState } from 'react'
import PedirDatos from '../helpers/PedirDatos'
import { Details } from './Details';
import { ItemList } from './ItemList';

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {

        PedirDatos()
            .then((res) => {
                setProductos(res)
            })
    }, [])


    return (
        <div>
            <Details />
            <ItemList productos={productos} />
        </div>
    )
}
