import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import styles from "./ItemListContainer.module.css";
import { collection, getDocs, query, where} from "firebase/firestore";
import db from "../../firebase/config";
import { Spinner } from "react-bootstrap";


export const ItemListContainer = ({greeting = 'Titulo no definido'}) => {

    const [prod, setProd] = useState ([])
    const {id} = useParams()
    useEffect(() =>{    
        const ref = collection(db, 'Products')
        const q = query(ref)
        const qCategory = query(ref, where('details.intensity', '==', `${id}`))
                if(id){
                    getDocs(qCategory).then((snapshot) =>{
                        if(snapshot.size === 0){
                            console.log("No results");
                        }
                        setProd(snapshot.docs.map((doc) =>
                            ({id: doc.id, ...doc.data(),})
                            ));
                    }).catch(err => console.log(err));
                }else{
                    getDocs(q).then((snapshot) =>{
                        if(snapshot.size === 0){
                            console.log("No results");
                        }
                        setProd(snapshot.docs.map((doc) =>
                            ({id: doc.id, ...doc.data()})
                            ));
                    }).catch(err => console.log(err))
        }
    }, [id]);
    return (
        <main className={styles.mainContainer}>
            <section>
                {
                    id ?
                    <div data-aos="zoom-out" className={styles.homeIntensity}>
                        <div data-aos="zoom-in-down">
                            <h2>¿Quieres capsulas de intensidad: {id}?</h2>
                        </div>
                        <div data-aos="zoom-in-up">
                            <h2>¡Aquí las tienes!</h2>
                        </div>
                    </div>
                    :
                    <div data-aos="zoom-out" className={styles.homePresentation}>
                        <div data-aos="zoom-in-down">
                            <h2>¿Quieres las mejores capsulas de cafe?</h2>
                        </div>
                        <div data-aos="zoom-in-up">
                            <h2>¡Aquí las tienes!</h2>
                        </div>
                    </div>
                }
                <h2>{greeting}</h2>
                <div className={styles.cardsProducts}>
                {   
                    prod.length > 0 ? <ItemList item={prod}/> : <Spinner animation="grow" style={{color: "#5b341c"}}/>
                }
                </div>
            </section>
        </main>      
)}

export default ItemListContainer;


