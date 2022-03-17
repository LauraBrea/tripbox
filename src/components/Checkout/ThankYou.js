import { Link } from "react-router-dom"
import thankYou from '../imgs/thankYou.png';

export const ThankYou = ({order}) => {

    return <div className="check">
                <div className="checkDetail">
                    <h2 className="checkTitle">Gracias por tu compra!</h2>
                    <h4>Tu número de orden es:</h4>
                    <h3> {order}</h3>
                    <h4>Recibiras a la brevedad un correo electrónico, con las instrucciones de pago y condiciones de uso.</h4>
                    <Link to='/'><button className="checkBtn">VOLVER AL HOME</button></Link>
                </div>
                <div className='checkImgbox'>
                    <img className='checkImg' src={thankYou} alt="gracias por tu compra"></img>
                </div>
            </div>
}