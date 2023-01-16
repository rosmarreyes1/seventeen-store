import React from "react";
import styles from './ItemListContainer.module.css'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



export const Item = ({ id, image, name, price }) => {

  return (
    <Card data-aos="zoom-in" className={styles.card}>
      <Link to={`/details/${id}`}><Card.Img variant="top" src={image} alt='Capsula de cafe' /></Link>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text className={styles.price}>
          <span>$ {price} </span>
        </Card.Text>
        <Link to={`/details/${id}`}><Button className={styles.buttonDetail}>Ver detalles</Button></Link>
      </Card.Body>
    </Card>
)}

export default Item