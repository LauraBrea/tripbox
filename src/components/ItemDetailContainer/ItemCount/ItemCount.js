export const ItemCount = ({max, min = 0, count, setCount}) => {

    const handleIncrement = () => {
        count < max && setCount(count + 1)
    }

    const handleDecrement = () => {
        count > min && setCount(count - 1)
    }

    return (
        <div className="counterGroup">
            <button onClick={ handleDecrement } className="circlebuttons"> - </button>
            <button disabled className="countertot">{count}</button>
            <button onClick={ handleIncrement } className="circlebuttons"> + </button>
        </div>
    )
}



/*
import { useState } from "react";

export const ItemCount = ({max, min = 1, onAdd}) => {

    const [count, setCount] = useState(min);

    const handleDecrement = () => {
        count > min && setCount (count - 1)
    };
  
    const handleIncrement = () => {
        count < max && setCount (count + 1)
    };

    const handleAdd =  () => {
        onAdd (count)
    }
    
  return <div className="counterGroup">

{
                isInCart(id) 
                ? 
                        <div className="stockContainer">
                            <Link to="/cart">
                                <button className="purchaseButton">Finalizar Compra</button>
                            </Link>
                                <br></br>
                            <Link to="/">
                                <button className="backButton">Seguir Comprando</button>
                            </Link>
                        </div>
                :
                    <>
                        <button onClick={ handleDecrement } className="circlebuttons"> - </button>
                        <button disabled className="countertot">{count}</button>
                        <button onClick={ handleIncrement } className="circlebuttons"> + </button>
                        <button onClick={ handleAdd } className="addCartButton" >Agregar al carrito</button>
                    </>
            }

 
    </div>
};
 */