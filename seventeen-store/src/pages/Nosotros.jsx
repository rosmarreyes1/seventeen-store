import React from 'react'
import styles from "./Pages.module.css"


const Nosotros = () => {
  return (
    <main className={styles.pageContainer}>
        <section className={styles.Nosotros}>
            <h1 id='up'>Nosotros</h1>
            <p>
                Seventeen Store surge como una Micro-PyME tras hacer realidad las ideas de dos jóvenes entusiastas, quienes a mediados del año 2020 se zambullen en el mundo de las capsulas de cafe, con el fin de brindar un servicio diferencial a través de soluciones y propuestas prácticas, haciendo siempre hincapié en el eslogan "Una opción más... Más que una opción.". Brindando servicios a todo tipo de clientes, de cualquier punto del país, y adaptándonos a sus necesidades.
            </p>
            <p>
                De esta manera y desde hace 2 años de intensos esfuerzos y trabajo se ha logrado crear fuertes lazos con fabricantes, productores y proveedores de confianza y primera calidad para poder brindarles a nuestros clientes lo mejor en relación precio-calidad, variedad, cantidad, facilidad y con la mejor atención y dedicación.
            </p>
            <p>
                Hoy en día nos desarrollamos como tienda virtual estando presentes en las principales plataformas de E-Commerce y también contamos con puntos de entrega y reparto en C.A.B.A, BS. AS. y CORDOBA Capital. Seguimos trabajando para poder estar cada vez más cerca de nuestros clientes.
            </p>
        </section>
    </main>
  )
}

export default Nosotros