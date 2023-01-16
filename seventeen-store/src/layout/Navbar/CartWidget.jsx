import React, { useContext } from "react"
import { GiShoppingCart } from "react-icons/gi"
import { Link } from "react-router-dom"
import { CartContext } from "../../cartcontext/CartContext"
import styles from "./Navbar.module.css"

const CartWidget = () =>{
    const {itemCart} = useContext(CartContext)
    let cartNumber = 0
    itemCart.map((el) =>(
        cartNumber = cartNumber + el.qty
    ))

    return (
    <div className={styles.cartWidget}>
        {
            cartNumber !== 0 ? <p style={{opacity:'1'}}>{cartNumber}</p> : <p style={{opacity:'0'}}>{cartNumber}</p> 
        }
        <Link to="/cart"><GiShoppingCart/></Link>
    </div>
    )
}

export default CartWidget