import { useContext, useState } from "react"
import { Navigate } from "react-router-dom"
import { CartContext } from "../../components/Cart/CartContext"
import { generarOrden } from "../../firebase/generarOrden"
import { ThankYou } from "./ThankYou"
import { validate } from "./validate"
import { Link } from "react-router-dom";
import checkout from '../imgs/checkout.png';
import "./Checkout.css";

export const Checkout = () => {

    const {cart, totalCart, deleteCart} = useContext(CartContext);

    const [orderId, setOrderId] = useState(null);

    const [values, setValues] = useState({
        nombre: '',
        email: '',
        tel: '',
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        validate(values) && generarOrden(values, cart, totalCart, setOrderId, deleteCart)
    }

    if (orderId) { return <ThankYou order={orderId}/> }

    if (cart.length === 0) { return <Navigate to='/' />  }

    return (
        <div className="check">
            <div className="checkDetail">
                <h2 className="checkTitle">Mis datos</h2>
                <form className="checkForm" onSubmit={handleSubmit}>
                    <input
                        className="checkFormtxt"
                        type='text'
                        placeholder="Tu nombre"
                        value={values.nombre}
                        onChange={handleInputChange}
                        name='nombre'
                    />
                    <input
                        className="checkFormtxt"
                        type='email'
                        placeholder="Tu email"
                        value={values.email}
                        onChange={handleInputChange}
                        name='email'
                    />
                    <input
                        className="checkFormtxt"
                        type='tel'
                        placeholder="Tu teléfono"
                        value={values.tel}
                        onChange={handleInputChange}
                        name='tel'
                    />
                    <button type="submit" className="checkBtn"> Enviar </button>
                    <Link to='/'><button className="checkBtnNg" onClick={deleteCart}>Cancelar</button></Link>
                </form>
            </div>
            <div className='checkImgbox'>
                <img className='checkImg' src={checkout} alt="datos personales"></img>
            </div>
        </div>
       
    )
}
