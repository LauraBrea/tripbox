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
import { Link } from "react-router-dom";

export const ItemCount = ({ max, min = 0, onAdd}) => {

    const [count, setCount] = useState(min);

    const handleIncrement = () => {
        count < max && setCount(count + 1)  }

    const handleDecrement = () => {
        count > min && setCount(count - 1)  }


    if (max !== 0) {
            return (
                <div className="counterGroupAdd">
                    <div className="circlebuttonsgroup">
                        <button onClick={ handleDecrement } className="circlebuttons"> - </button>
                        <button disabled className="countertot">{count}</button>
                        <button onClick={ handleIncrement } className="circlebuttons"> + </button>
                    </div>
                    <button className="addCartButton" onClick={() => onAdd(count)}>Agregar al carrito</button>
                </div>
            )
    }
    return (
        <> 
            <Link to='/'><button className="addCartButton">VOLVER AL HOME</button> PRODUCTO SIN STOCK !!!</Link>
        </>
    )
}

*/

