import { useContext } from "react";
import { CartContext } from "../Cart/CartContext";
import { DeleteWidget } from "../Widget/DeleteWidget/DeleteWidget";
import { EmptyCart } from "../EmptyCart/EmptyCart";
import { Link } from "react-router-dom";
import addCart from '../imgs/addCart.png';
import "./Cart.css";




/* ----------clase - profe - FUNCIONA ok ----------------*/
export const Cart = () => {

    const { qtyCart, cart, totalCart, deleteCart, deleteItem } = useContext(CartContext);

    return <div className="cart">
        {cart.length === 0 ? ( <EmptyCart/> ) : (


            <div className="cartBox">
                <div className="cartDetail">
                    <h2 className="cartTitle">Carrito de Compras</h2>
       
            {
                cart.map((item) => (
                    <div className="itemRow" key={item.id}>
                        <img src={item.img} alt={item.name}/>
                        <article>
                            <h4>{item.name}</h4>
                            <p>Cantidad: {item.qty}</p>
                            <p>Precio Un: $ {item.price}</p>
                        </article>
                        <p>Sub-Total: $ {item.qty * item.price}</p>
                        <button className="deleteCartItem" onClick={() => deleteItem(item.id)}>
                            <DeleteWidget/>
                        </button>
                    </div>
                ))
            }
         

            <div className="cartTotal">
                <h2>Total: $ {totalCart()}</h2>
                <h4>Cant. total de productos: {qtyCart()}</h4>
            </div>
            <div className="btnRow">
                <Link to="/checkout" ><button className="btnRowButton ">Finalizar compra</button></Link>
                <button className="btnRowButtonNg" onClick={deleteCart}>Vaciar carrito</button>
            </div>
            </div>

<div className='cartImgbox'>
    <img className='cartImg' src={addCart} alt="carrito vacio"></img>
</div>
</div>
)}
</div>
};




/*
import { useContext } from "react";
import { CartContext } from "../Cart/CartContext";
import { DeleteWidget } from "../Widget/DeleteWidget/DeleteWidget";
import { EmptyCart } from "../EmptyCart/EmptyCart";
import { Link } from "react-router-dom";
import addCart from '../imgs/addCart.png';
import "./Cart.css";

export const Cart = () => {

    const { qtyCart, cart, totalCart, deleteCart, deleteItem } = useContext(CartContext);

    return <div className="cart">
        {cart.length === 0 ? ( <EmptyCart/> ) : (


            <div className="cartBox">
                <div className="cartDetail">
                    <h2 className="cartTitle">Carrito de Compras</h2>


                    {
                    cart.map((item) => (
                        <div className="itemRow" key={item.item.id}>
                            <img src={item.item.img} alt={item.item.name}/>
                            <article>
                                <h4>{item.item.name}</h4>
                                <p>Cantidad: {item.qty}</p>
                                <p>Precio Un: $ {item.item.price}</p>
                            </article>
                            <p>Sub-Total: $ {item.qty * item.item.price}</p>
                            <button className="deleteCartItem" onClick={() => deleteItem(item.item.id)}>
                                <DeleteWidget/>
                            </button>
                        </div>
                    ))
                    }***********
                    <div className="cartTotal">
                        <h2>Total: $ {totalCart()}</h2>
                        <h4>Cant. total de productos: {qtyCart()}</h4>
                    </div>
                    <div className="btnRow">
                        <Link to="/checkout" ><button className="btnRowButton ">Finalizar compra</button></Link>
                        <button className="btnRowButtonNg" onClick={deleteCart}>Vaciar carrito</button>
                    </div> ********************
                </div>

                <div className='cartImgbox'>
                    <img className='cartImg' src={addCart} alt="carrito vacio"></img>
                </div>
            </div>
        )}
    </div>
};

*/
