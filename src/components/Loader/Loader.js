import React from 'react';
import loader from './loader.gif';
import "./Loader.css";


export const Loader = () => {

    return <div className="loaderbox">
        <h2 className='loadertxt'>Cargando...</h2>
        <img className='loaderimg' src={loader} alt="cargando"></img>
    </div>
}