import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import MyPromise from "../../utils/MyPromise";
import Data from "../../data/Data";
import ItemDetails from "./ItemDetails";

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState()
    const { id } = useParams()


    useEffect(() => {
        MyPromise(2000, Data)
            .then(
                (res) => setDetail(res.find(el => el.id === parseFloat(id)))
            )
    }, [detail])

    return (
        <section>
            {detail ? <ItemDetails item={detail} /> : <p>Obteniendo producto...</p>}
        </section>
    )
}
export default ItemDetailContainer  
