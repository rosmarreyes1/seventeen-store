import React from "react";
import { Link } from "react-router-dom";

export const Item = ({ id, img, nombre, precio}) => {

    return (
    <article>

    <div>
    <img src={img}/>
    <div>
    <h1>{nombre}</h1>
    <p> $ {precio}</p>
    <Link to={`/item/${id}`}><button>Ver detalles</button></Link>
    </div>
    </div>
    </article>
)
}

export default Item