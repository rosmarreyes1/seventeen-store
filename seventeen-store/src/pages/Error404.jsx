import React from "react";
import styles from "./Pages.module.css"
import {Link} from 'react-router-dom'

const Error404 = () =>{
    return(
        <main className={styles.pageContainer}>
            <section className={styles.error404}>
                <h2>404</h2>
                <h2>Page Not Found</h2>
                <h3>¡Oops!</h3>
                <h3>¡Al parecer haz intentado ingresar a una página que no se encuentra en el servidor!</h3>
                <p>
                    No te preocupes, puedes volver al inicio
                </p>
                <Link to="/">Ir a home</Link>
            </section>
        </main>       
    )
}

export default Error404