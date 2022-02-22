import { createContext, useState } from "react";


export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    function addToCart(item, qty) {
        if (isInCart(item.id)) {
            updateItem(item.id, qty);
        } else {
            const itemAdd = {
                item: item, qty: qty,
            };
        setCart([...cart, itemAdd]);
        }
      }
    
    const updateItem = (id, qty) => {
        const updatedItem = cart.map((item) => {
          if (item.item.id === id) {
            return {
              ...item, qty: item.qty + qty,
            };
          } else {
            return null;
          }
        });
        setCart(updatedItem);
      };
    
    const isInCart = (id) => {
        return cart.find((itemCart) => itemCart.item.id === id)
    };

    const qtyCart = () => {
        return cart.reduce((acc, itemCart) => acc + itemCart.qty, 0)
    };

    const totalCart = () => {
        return cart.reduce((acc, itemCart) => acc + itemCart.qty * itemCart.item.price, 0)
    };

    const deleteCart = () => {
        setCart([])
    };

    const deleteItem = (id) => {
        setCart( cart.filter((itemCart) => itemCart.item.id !== id) )
    }

    return (
        <CartContext.Provider value={{
            cart, addToCart, isInCart, qtyCart, totalCart, deleteCart, deleteItem
          }}>
            {children}
        </CartContext.Provider>
    )
};

/*
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

*/