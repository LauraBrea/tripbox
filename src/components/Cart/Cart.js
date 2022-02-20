import { useContext } from "react";
import { CartContext } from "../Cart/CartContext";
import { DeleteWidget } from "../Widget/DeleteWidget/DeleteWidget";

import "./Cart.css";


export const Cart = () => {

    const { cart, totalCart, vaciarCart, eliminarItem } = useContext(CartContext);

    return (
        <div className="cartDetail">
            <h2 className="cartTitle">Carrito de Compras</h2>
            <hr/>

            {
                cart.map((item) => (
                    <div className="itemRow" key={item.id}>
                        <img src={item.img} alt="" />
                        <h4>{item.name}</h4>
                        <p>Cantidad: {item.qty}</p>
                        <p>Precio: ${item.qty * item.price}</p>
                        <button className="deleteCartItem" onClick={() => eliminarItem(item.id)}>
                            <DeleteWidget/>
                        </button>
                    </div>
                ))
            }

            <hr/>
            <h2 className="cartTotal" >Total: ${totalCart()}</h2>

            <div className="itemRow">
                <button className="addCartButton " onClick={vaciarCart}>Vaciar carrito</button>
                <button className="addCartButton ">Finalizar compra</button>
            </div>
        </div>
    )
}