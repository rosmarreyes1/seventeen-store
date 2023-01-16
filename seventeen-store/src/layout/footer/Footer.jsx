import React from 'react'
import { BsFacebook, BsInstagram } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import styles from './Footer.module.css'
const Footer = () => {
  // const ScrollTop = () =>{
  //   useEffect(()=>{
  //     window.scrollIntoView({behavior: "smooth"})
  //   }, [])

  return(
<footer className={styles.footer}>
  <section>
    <div>
      <ul>
        <li><NavLink to={'/nosotros'}>Nosotros</NavLink></li>
        <li><NavLink to={'faqs'}>FAQs</NavLink></li>
      </ul>
    </div>
  </section>
  <section>
    <div>
      <h3>Copyright &copy; 2023.</h3>
      <h3>Todos los derechos reservados. Pagina diseñada por Rosmar Reyes</h3>
    </div>
  </section>    
  <section className={styles.sectionRedes}>
    <div>
      <h3>Visita nuestras redes</h3>
    </div>
    <div>
      <span className={styles.facebook}>
        <a href='https://www.facebook.com' target="_blank" rel="noopener noreferrer">< BsFacebook/></a>
      </span>
      <span className={styles.instagram}>
        <a href='https://www.instagram.com' target='_blank' rel="noopener noreferrer"><BsInstagram/></a>
      </span>
    </div>
  </section>
</footer>
  )
}

export default Footer