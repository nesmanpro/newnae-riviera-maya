import { useEffect, useState } from 'react'
import PedirDatos from '../helpers/PedirDatos'
import { Details } from '../components/Details';
import { ItemList } from '../components/ItemList';
import { Banda } from '../components/Banda';
import { BannerBot } from '../components/BannerBot';

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {

        PedirDatos()
            .then((res) => {
                setProductos(res)
            })
    }, [])


    return (
        <div className='bg-arenaClaro'>
            <Details />
            <ItemList productos={productos} />
            <BannerBot />
            <Banda />
        </div>
    )
}
