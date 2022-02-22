import { useContext } from "react";
import { CartContext } from "../Cart/CartContext";
import { DeleteWidget } from "../Widget/DeleteWidget/DeleteWidget";
import "./Cart.css";


export const Cart = () => {

    const { cart, totalCart, deleteCart, deleteItem } = useContext(CartContext);

    return (
        <div className="cartDetail">
            <h2 className="cartTitle">Carrito de Compras</h2>
            {
              cart.map((item) => (
                  <div className="itemRow" key={item.item.id}>
                      <img src={item.item.img} alt={item.item.name}/>
                      <h4>{item.item.name}</h4>
                      <article>
                        <p>Cantidad: {item.qty}</p>
                        <p>Precio Unitario: $ {item.item.price}</p>
                      </article>
                      <p>Precio: $ {item.qty * item.item.price}</p>
                      <button className="deleteCartItem" onClick={() => deleteItem(item.item.id)}>
                          <DeleteWidget/>
                      </button>
                  </div>
              ))
            }
            <h2 className="cartTotal" >Total: $ {totalCart()}</h2>
            <div className="btnRow">
                <button className="btnRowButton " onClick={deleteCart}>Vaciar carrito</button>
                <button className="btnRowButton ">Finalizar compra</button>
            </div>
        </div>
    )
}

