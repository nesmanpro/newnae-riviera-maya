import { useEffect, useState } from "react"
import PedirItemId from '../helpers/PedirItemId'
import { ItemDetail } from "../components/ItemDetail";

export const ItemDetailContainer = ({ itemId }) => {

    const [item, setItem] = useState(null);

    useEffect(() => {
        PedirItemId(itemId)
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
