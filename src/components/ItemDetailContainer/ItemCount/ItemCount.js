import { useState } from "react";

export const ItemCount = ({max, min = 0, onAdd}) => {

    const [count, setCount] = useState(min);

    const handleIncrement = () => {
        count < max && setCount(count + 1)
    }

    const handleDecrement = () => {
        count > min && setCount(count - 1)
    }

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
