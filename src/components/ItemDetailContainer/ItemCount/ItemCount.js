import { useState } from "react";

export const ItemCount = () => {

    const [count, setCount] = useState(1);

    const handleDecrement = () => {

        if (count <= 1) {  count += 1;
        } 
        else { setCount(count - 1)
        }
    };
  
    const handleIncrement = () => {
        setCount(count + 1)
    };

  return <div className="counterGroup">
      <button onClick={ handleDecrement } className="circlebuttons"> - </button>
      <button disabled className="buttonCounter">{count}</button>
      <button onClick={ handleIncrement } className="circlebuttons"> + </button>
      <button className="addCartButton" >Agregar al carrito</button>
    </div>
};
