import React from 'react';
import { Link } from 'react-router-dom';
import error from '../imgs/error.png';
import './Error.css';

export const Error = () => {

    return <div className="errorbox">
        <img className='errorimg' src={error} alt="pagina no encontrada"></img>
        <h4 className='errortxt'>Página no encontrada</h4>
        <Link to='/' className='errorbtn'>VOLVER AL HOME</Link>
    </div>
}