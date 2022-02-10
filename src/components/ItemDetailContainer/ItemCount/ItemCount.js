import React, { useState } from "react";

export const ItemCount = ({ currentstock, initial, onAdd, handleIncrement }) => {

  const [count, setCount] = useState(1);
  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
      console.log ("resta")
    }
  }; 

  handleIncrement = () => {
    if (currentstock > 0 && count < currentstock) {  
      setCount(count + 1);
      console.log ("aumenta")

    }
  };

  return <div className="counterGroup">
      <button onClick={(e) => handleDecrement()} className="circlebuttons">
        {" "}
       -{" "}
      </button>
      <button disabled className="buttonCounter">
        {count}
      </button>
      <button onClick={(e) => handleIncrement()} className="circlebuttons">
        {" "}
       +{" "}
      </button>
      <button className="addCartButton" onClick={(e) => onAdd(count)}>Agregar al carrito</button>
    </div>
};
