import { addDoc, collection } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { CartContext } from "../../cartcontext/CartContext";
import db from "../../firebase/config";
import { NavLink } from "react-router-dom";
import styles from "./Cart.module.css";
import { useForm } from "../../utils/useForm";


const Checkout = () => {
    const initialForm = {
        name: "",
        lastname: "",
        phone: "",
        email: "",
    }
    
    const validationsForm = (form) => {
        let error = {}
        let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
        let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
        let regexPhone = /^[0-9]*(\.?)[ 0-9]+$/
        if (!form.name.trim()) {
            error.name = "El campo 'Nombre' es requerido"
    
        } else if (!regexName.test(form.name.trim())) {
            error.name = "El campo 'Nombre' solo acepta letras y espacios en blanco"
        }
        if (!form.lastname.trim()) {
            error.lastname = "El campo 'Apellido' es requerido"
        } else if (!regexName.test(form.lastname.trim())) {
            error.lastname = "El campo 'Nombre' solo acepta letras y espacios en blanco"
        }
        if (!form.phone.trim()) {
            error.phone = "El campo 'Telefono' es requerido"
        } else if (!regexPhone.test(form.phone.trim())) {
            error.phone = "El campo 'Telefono' solo acepta numeros"
        }
        if (!form.email.trim()) {
            error.email = "El campo 'Email' es requerido"
        } else if (!regexEmail.test(form.email.trim())) {
            error.email = "El campo 'Email' es incorrecto"
        }
        return error
    }

    const {
        form,
        error,
        handleChange,
        handleBlur,
    } = useForm(initialForm, validationsForm);
    const { itemCart, totallyPrice, clear } = useContext(CartContext);
    const [orderId, setOrderId] = useState();

    const handleSubmit = (e) => {
        e.preventDefault()
        const date = new Date();
        const newItem = { ...itemCart }
        const order = {
            buyer: form,
            items: newItem,
            date: date,
            totallyPrice: totallyPrice
        }
        const cartRef = collection(db, 'orders')
        const ordersCollection = (cartRef)
        addDoc(ordersCollection, order)
            .then(({ id }) => {
                setOrderId(id);
                clear();
            })
            .catch((err) => console.log(err))
    }

    return (
        <main>
            {itemCart.length ? (
                <section className={styles.sectionCheckout}>
                    <form onSubmit={handleSubmit}>
                            <label htmlFor="name">Nombre </label>
                            <input
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="text"
                                value={form.name}
                                name="name"
                                placeholder="José"
                                required
                            />
                                {error.name && <p>{error.name}</p>}
                            <label htmlFor="lastname">Apellido </label>
                            <input
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="text"
                                value={form.lastname}
                                name="lastname"
                                placeholder="Pérez"
                                required
                            />                                
                                {error.lastname && <p>{error.lastname}</p>}
                            <label htmlFor="telefono">Teléfono </label>
                            <input
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="phone"
                                value={form.phone}
                                name="phone"
                                placeholder="11123456789"
                                required
                            />
                                {error.phone && <p>{error.phone}</p>}
                            <label htmlFor="email">Email </label>
                            <input
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="email"
                                value={form.email}
                                name="email"
                                placeholder="hola@mail.com"
                                required
                            />
                                {error.email && <p>{error.email}</p>}
                        <div>
                            <button type="submit">Enviar</button>
                        </div>
                    </form>
                </section>
            ) : (
                <section className={styles.sectionFinish}>
                    <div>
                        <h2>
                            Su compra fue realizada con exito. Su ticket de compra es:
                        </h2>
                        {orderId && <p>{orderId}</p>}
                        <h3>
                            <NavLink to={"/"}>Seguir comprando</NavLink>
                        </h3>
                    </div>
                </section>
            )}
        </main>
    );
};

export default Checkout;
