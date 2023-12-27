import { useEffect, useState } from "react"
import PedirItemId from '../helpers/PedirItemId'
import { ItemDetail } from "../components/ItemDetail";
import { useLocation, useParams } from "react-router-dom";

export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);
    const id = useParams().id;
    const pathname = useLocation();




    useEffect(() => {
        PedirItemId(id)
            .then((res) => {
                setItem(res);
            })
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });


    }, [pathname])



    return (
        <div>
            {item && <ItemDetail item={item} />}
        </div>
    )
}
