import React, { createContext, useEffect, useState } from 'react'
export const CartContext = createContext([])


export const CartProvider = ({ children }) => {
    const itemCartLocalStorage = JSON.parse(localStorage.getItem('item') || '[]')
    const [itemCart, setItemCart] = useState(itemCartLocalStorage)
    useEffect(() => {
        localStorage.setItem('item', JSON.stringify(itemCart))
    }, [itemCart])

    const isInCart = (id) => {
        const inCart = itemCart.find(el => el.id === id)
        return inCart
    }

    const addItem = (item, qty) => {
        isInCart(item.id)
            ?
            setItemCart(itemCart.map(el => {
                if (el.id === item.id) {
                    el.qty += qty
                }
                return el
            }))
            :
            setItemCart([...itemCart, { ...item, qty: qty }])
    }

    const totallyPrice = itemCart.reduce((agg, el) => (el.price * el.qty) + agg, 0)

    const clear = () => {
        setItemCart([])
    }

    const removeItem = (id) => {
        setItemCart(itemCart.filter(el => el.id === id ? el.qty = el.qty - 1 : el.qty))
    }


    return (
        <CartContext.Provider value={{ itemCart, addItem, clear, removeItem, totallyPrice }}>
            {children}
        </CartContext.Provider>
    )
}