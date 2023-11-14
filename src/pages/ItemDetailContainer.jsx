import { useEffect, useState } from "react"
import PedirItemId from '../helpers/PedirItemId'
import { ItemDetail } from "../components/ItemDetail";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);
    const id = useParams().id;
    console.log(id)

    useEffect(() => {
        PedirItemId(id)
            .then((res) => {
                setItem(res);
            })
    }, [])



    return (
        <div>
            {item && <ItemDetail item={item} />}

        </div>
    )
}
