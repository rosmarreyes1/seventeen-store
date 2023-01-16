import React from 'react'
import styles from "./Pages.module.css"


const FAQs = () => {
  return (
    <main className={styles.pageContainer}>
        <section className={styles.Faqs}>
            <h1>Preguntas Frecuentes</h1>
            <h2>Envio</h2>
            <h3>¿Cuál es el TIEMPO DE ENTREGA?</h3>
            <p>
                El tiempo natural de entrega es de 2 a 6 días hábiles, sujeto a disponibilidad del producto, la llegada de su mercancía depende directamente del servicio de paquetería, por lo que el tiempo que se estima lo definen ellos.
            </p>
            <h3>¿Puedes hacer envíos fuera de la Ciudad Autonoma de Buenos Aires?</h3>
            <p>
                Si, ocupamos el servicio de DHL , en este caso adjuntaremos tu guía en tu pedido.  En caso de que no tengan el servicio de entrega a alguna población o el cliente requiere que le entreguen de manera OCURRE nuestro equipo se pondrá en contacto con usted para explicarle los métodos de envío disponibles. 
            </p>
            <h3>¿Cómo puedo almacenar mi café de buena manera?</h3>
            <p>
                Para una frescura óptima, sugerimos almacenar nuestro café a temperatura ambiente en un recipiente hermético, o en las bolsas de café donde se te entrega de manera cerrada. Incluso puedes meterla en una Ziploc o lata para que se mantenga Fresco,  NO guardes tu café en el refrigerador a menos que lo puedas poner en un recipiente perfectamente hermético!
            </p>
        </section>
    </main>
)
}

export default FAQs