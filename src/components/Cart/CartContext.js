import { createContext, useState } from "react";


export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart( [...cart, item] )
    };

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    };

    const qtyCart = () => {
        return cart.reduce((acc, prod) => acc + prod.qty, 0)
    };

    const totalCart = () => {
        return cart.reduce((acc, prod) => acc + prod.qty * prod.price, 0)
    };

    const deleteCart = () => {
        setCart([])
    };

    const deleteItem = (id) => {
        setCart( cart.filter((prod) => prod.id !== id) )
    }

    return (
        <CartContext.Provider value={{
            cart, addToCart, isInCart, qtyCart, totalCart, deleteCart, deleteItem
          }}>
            {children}
        </CartContext.Provider>
    )
}

