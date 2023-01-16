import React, { useContext } from 'react'
import { CartContext } from '../../cartcontext/CartContext'
import { BsFillTrashFill } from "react-icons/bs"
import styles from "./Cart.module.css"
import { Link } from 'react-router-dom'


const Cart = () => {
    const { itemCart, clear, removeItem, totallyPrice } = useContext(CartContext)
    return (
        <main className={styles.container}>
            {
                itemCart.length
                    ?
                    <section className={styles.sectionCart}>
                        <article className={styles.containerCart}>
                            <h2>Detalle de tu compra</h2>
                            {itemCart.map((el) => (
                                    <div key={el.id} className={styles.productCart}>
                                        <img src={el.image} alt='Grano de cafe' />
                                        <div>
                                            <h3>Producto</h3>
                                            <p>{el.name}</p>
                                        </div>
                                        <div>
                                            <h3>Precio</h3>
                                            <p>$ {el.price}</p>
                                        </div>
                                        <div>
                                            <h3>Cantidad</h3>
                                            <p>{el.qty}</p>
                                        </div>
                                        <div>
                                            <button className={styles.buttonRemove} onClick={() => removeItem(el.id)}> <BsFillTrashFill /></button>
                                        </div>
                                    </div>
                            ))}
                        </article>
                        <div className={styles.containerPrice}>
                            <h2>Monto total a pagar</h2>
                            <div>
                                <h3>Precio total</h3>
                                <p>$ {totallyPrice}.00</p>
                            </div>
                            <div>
                                <button className={styles.buttonClear} onClick={clear}><p>Vaciar carrito</p> <BsFillTrashFill /></button>
                            </div>
                            <div>
                                <button className={styles.buttonFinish}>
                                    <Link to={'/checkout'}>
                                        Finalizar
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </section>
                    :
                    <section className={styles.cartEmpty}>
                        <h2>¡Vaya! </h2>
                        <h2>¡Parece que se te olvidó algo!</h2>

                        <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJtNDk4LjE4IDMwMy42NGMtMC44OTg0NC0xLjA1MDgtMi4yMTQ4LTEuNjU2Mi0zLjU5NzctMS42NTYyaC0yMzUuMzdsLTQuNzM0NC0yNi4yODVjLTAuMzU5MzgtMi4wNDY5LTIuMDExNy0zLjYyMTEtNC4wNzQyLTMuODgyOGwtMzcuODg3LTQuNzM0NGMtMi42MTMzLTAuMzI4MTItNSAxLjUyNzMtNS4zMjQyIDQuMTQ0NS0wLjMyODEyIDIuNjEzMyAxLjUyNzMgNSA0LjE0MDYgNS4zMjgxbDM0LjY2OCA0LjMwODYgMjkuOTc3IDE3MS45MWMwLjM5ODQ0IDIuMjk2OSAyLjQwNjIgMy45NjQ4IDQuNzM4MyAzLjkyOTdoMjUuNDh2My40MTAyaC0wLjAwMzkwN2MtNy41NDY5IDEuNTc4MS0xMy44MTIgNi44MDQ3LTE2LjcxNSAxMy45NDUtMi45MDYyIDcuMTM2Ny0yLjA2NjQgMTUuMjU0IDIuMjM4MyAyMS42NTIgNC4zMDA4IDYuMzk0NSAxMS41MDQgMTAuMjMgMTkuMjExIDEwLjIzIDcuNzEwOSAwIDE0LjkxNC0zLjgzNTkgMTkuMjE1LTEwLjIzIDQuMzA0Ny02LjM5ODQgNS4xNDQ1LTE0LjUxNiAyLjIzODMtMjEuNjUyLTIuOTAyMy03LjE0MDYtOS4xNzE5LTEyLjM2Ny0xNi43MTUtMTMuOTQ1di0zLjU5NzdoMTIzLjc5djMuNDEwMmMtNy41NDY5IDEuNTc0Mi0xMy44MTIgNi44MDA4LTE2LjcxNSAxMy45NDEtMi45MDYyIDcuMTQwNi0yLjA2NjQgMTUuMjU4IDIuMjM4MyAyMS42NTIgNC4zMDA4IDYuMzk0NSAxMS41MDQgMTAuMjMgMTkuMjExIDEwLjIzIDcuNzEwOSAwIDE0LjkxNC0zLjgzNTkgMTkuMjE1LTEwLjIzIDQuMzA0Ny02LjM5NDUgNS4xNDQ1LTE0LjUxMiAyLjIzODMtMjEuNjUyLTIuOTAyMy03LjE0MDYtOS4xNzE5LTEyLjM2Ny0xNi43MTUtMTMuOTQxdi0zLjQxMDJoMjMuMTU2YzIuNjE3MiAwIDQuNzM4My0yLjEyMTEgNC43MzgzLTQuNzM4MyAwLTIuNjEzMy0yLjEyMTEtNC43MzQ0LTQuNzM4My00LjczNDRoLTE4Ny41NGwtMi42OTkyLTE1LjUzNWgxOTQuOTNjMi4zNTk0IDAuMDI3MzQ0IDQuMzc4OS0xLjY4NzUgNC43MzQ0LTQuMDIzNGwxNy42MTctMTIwLjA1YzAuMjQyMTktMS4zMzk4LTAuMTAxNTYtMi43MTg4LTAuOTQ5MjItMy43ODkxem0tMTczLjcxIDE3OS4wMmMwIDUuNTM1Mi0zLjMzNTkgMTAuNTI3LTguNDQ5MiAxMi42NDUtNS4xMTMzIDIuMTE3Mi0xMSAwLjk0NTMxLTE0LjkxNC0yLjk2ODgtMy45MTgtMy45MTQxLTUuMDg1OS05LjgwMDgtMi45Njg4LTE0LjkxNCAyLjExNzItNS4xMTMzIDcuMTA5NC04LjQ0OTIgMTIuNjQ1LTguNDQ5MiAzLjYyODkgMCA3LjExMzMgMS40NDE0IDkuNjc5NyA0LjAwNzhzNC4wMDc4IDYuMDUwOCA0LjAwNzggOS42Nzk3em0xMzMuMzYgMGMwIDUuNTM1Mi0zLjMzNTkgMTAuNTI3LTguNDQ5MiAxMi42NDVzLTExIDAuOTQ1MzEtMTQuOTE0LTIuOTY4OGMtMy45MTQxLTMuOTE0MS01LjA4NTktOS44MDA4LTIuOTY4OC0xNC45MTQgMi4xMjExLTUuMTEzMyA3LjEwOTQtOC40NDkyIDEyLjY0NS04LjQ0OTIgMy42MzI4IDAgNy4xMTMzIDEuNDQxNCA5LjY3OTcgNC4wMDc4czQuMDA3OCA2LjA1MDggNC4wMDc4IDkuNjc5N3ptMTQuODcxLTYwLjUyM2gtMTkyLjUxbC0xOS4zMi0xMTAuNjhoMjI4LjIyem0tMTIxLjc2LTMxLjU5Yy0xLjU1ODYtMC4wMDM5MDYtMy4wMTU2LTAuNzczNDQtMy44OTQ1LTIuMDYyNS0wLjg3ODkxLTEuMjg1Mi0xLjA3MDMtMi45MjE5LTAuNTExNzItNC4zNzUgMy4wMzUyLTcuNzIyNyA5LjA1NDctMTMuODk1IDE2LjY5OS0xNy4xMTMgNy42NDQ1LTMuMjIyNyAxNi4yNjYtMy4yMjI3IDIzLjkxIDAgNy42NDA2IDMuMjE4OCAxMy42NjQgOS4zOTA2IDE2LjY5NSAxNy4xMTMgMC41MjM0NCAxLjE3OTcgMC41NDI5NyAyLjUyMzQgMC4wNTA3ODIgMy43MTg4LTAuNDg4MjggMS4xOTE0LTEuNDQ5MiAyLjEzNjctMi42NDg0IDIuNjA1NS0xLjIwMzEgMC40NzI2Ni0yLjU0NjkgMC40MzM1OS0zLjcxODgtMC4xMDkzOC0xLjE3MTktMC41MzkwNi0yLjA3NDItMS41MzkxLTIuNDkyMi0yLjc1NzgtMS41NjY0LTMuOTk2MS00LjMwNDctNy40MjE5LTcuODU1NS05LjgzMi0zLjU1MDgtMi40MDYyLTcuNzQ2MS0zLjY4NzUtMTIuMDM1LTMuNjY4LTQuMjY1Ni0wLjAyNzM0NC04LjQ0MTQgMS4yNDYxLTExLjk2OSAzLjY0ODQtMy41MjczIDIuNDAyMy02LjI0MjIgNS44MjAzLTcuNzc3MyA5LjgwMDgtMC43MTA5NCAxLjgzOTgtMi40ODQ0IDMuMDQ2OS00LjQ1MzEgMy4wMzEyem04LjcxNDgtMzkuOTIyYy0wLjA5NzY1NiAzLjAzOTEtMi4wMTE3IDUuNzIyNy00Ljg1NTUgNi44MDA4cy02LjA1NDcgMC4zNDM3NS04LjE0NDUtMS44NjcyYy0yLjA4OTgtMi4yMTA5LTIuNjQ0NS01LjQ2MDktMS40MDYyLTguMjM4MyAxLjIzODMtMi43NzczIDQuMDIzNC00LjUzNTIgNy4wNjY0LTQuNDYwOSAyLjAwMzkgMC4wNDY4NzYgMy45MDYyIDAuODk4NDQgNS4yODUyIDIuMzU1NXMyLjExNzIgMy40MDYyIDIuMDU0NyA1LjQxMDJ6bTQ2LjEyNSAwYy0wLjA5Mzc1IDMuMDE5NS0xLjk4NDQgNS42ODc1LTQuNzk2OSA2Ljc4MTJzLTYuMDExNyAwLjQwMjM0LTguMTE3Mi0xLjc1NzhjLTIuMTA5NC0yLjE2NDEtMi43MjI3LTUuMzc1LTEuNTU4Ni04LjE2MDIgMS4xNjAyLTIuNzg5MSAzLjg3NS00LjYwOTQgNi44OTQ1LTQuNjI4OSAyLjA0NjktMC4wMTU2MjQgNC4wMTE3IDAuODA0NjkgNS40NDE0IDIuMjY5NSAxLjQyOTcgMS40NjQ4IDIuMjAzMSAzLjQ0OTIgMi4xMzY3IDUuNDk2MXoiIGZpbGw9IiMwMTAxMDEiLz4KPC9zdmc+Cg==" alt='shopping cart sad'/>
                        
                        <h2>Tu carrito se encuentra vacio</h2>
                        <Link to={'/'}>Volver a home</Link>
                    </section>
            }
        </main>
    )
}
export default Cart
