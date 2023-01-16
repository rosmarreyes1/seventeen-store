import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import ItemDetails from "./ItemDetails";
import { doc, getDoc } from "firebase/firestore";
import db from "../../firebase/config";
import { Spinner } from "react-bootstrap";
import styles from './ItemDetailsContainer.module.css'

const ItemDetailContainer = () =>{
    const [detail, setDetail] = useState()
    const { id } = useParams([])
    

    useEffect(() => {
        const detailRef = doc(db, "Products", id)
        getDoc(detailRef)
        .then((snapshot) =>{
            if(snapshot.exists()){
                setDetail({id: snapshot.id, ...snapshot.data()})
            }
        })
        .catch(err => console.log(err))
        },[id])

    return (
        <main className={styles.detailContainer}>
            {detail 
            ?
            <ItemDetails item={detail}/> 
            :
            <Spinner animation="grow" style={{color: "#5b341c"}}/> }
        </main>
    )
}


export default ItemDetailContainer  