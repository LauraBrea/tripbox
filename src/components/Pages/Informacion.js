import React from "react";
import "./pages.css";

export const Informacion = () => {

    return <div className="pagecontainer">
            <h2 className='pagetitleH2'>Cómo funciona?</h2>
            <p className='pagesubTitle'>Comunicate directamente con el lugar (los datos de contacto figuran en la descripción!) y hacé tu reserva indicando el código de tu Tripbox. Todas las reservas se realizan con anticipación y se encuentran sujetas a disponibilidad y condiciones del prestador de la experiencia.</p>
            <p className='pagesubTitle'>Las experiencias se deben reservar y realizar durante el plazo de vigencia del Tripbox. Luego de la fecha de vencimiento, el código Tripbox queda inhabilitado y no puede ser utilizado. No es posible realizar una reserva para una fecha posterior al vencimiento </p>
            <br />
            <h2 className='pagetitleH3'> Cuánto tiempo tengo para utilizar mi Tripbox?</h2>
            <p className='pagesubTitle'>La experiencia se debe reservar y realizar hasta la fecha de vencimiento que figure junto al código Tripbox (independientemente de cuando se active). Se puede usar hasta el mismo día del vencimiento inclusive. No es posible reservar antes del vencimiento para una fecha posterior. </p>
            <br />
            <h2 className='pagetitleH3'>En caso de no poder asistir, puedo cancelar mi reserva?</h2>
            <p className='pagesubTitle'>En el caso de no poder asistir, te solicitamos que por favor canceles tu reserva contactando al prestador tan pronto como sea posible. La política de cancelación depende de las condiciones de cada establecimiento asociado. Recomendamos que te informes de ellas en el momento de hacer la reserva.</p>
            <p className='pagesubTitle'>Si el prestador acepta la cancelación debes enviarnos un mail a info@tripbox.com.ar para que liberemos el código.</p>
    </div>
};