import React from 'react';
import { Link } from 'react-router-dom';
import "./EmptyCart.css";

export const EmptyCart = () => {

    return <div className="emptybox">
        <img className='emptyimg' src="https://i.ibb.co/GtP10nd/Add-to-Cart-cuate.png" alt="carrito vacio"></img>
        <h4 className='emptytxt'>Tu carrito está vacio</h4>
        <Link to="/" className='emptybtn'>VOLVER AL HOME</Link>
    </div>
}