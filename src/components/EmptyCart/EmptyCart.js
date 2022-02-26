import React from 'react';
import { Link } from 'react-router-dom';
import emptyCart from "./emptyCart.png";
import "./EmptyCart.css";

export const EmptyCart = () => {

    return <div className="emptybox">
        <img className='emptyimg' src={emptyCart} alt="carrito vacio"></img>
        <h4 className='emptytxt'>Tu carrito está vacio</h4>
        <Link to="/" className='emptybtn'>VOLVER AL HOME</Link>
    </div>
}