import React from "react";

export const Item = ({ categ, img, title, descr, price }) => {
  
    return (
      <div className="card">
        <img src={img}></img>
        <h4>{categ}</h4>
        <h3>{title}</h3>
        <p className="descr">{descr}</p>
        <p className="price">{price}</p>
        <div className="cardbuttons">
          <button className="btn">Comprar</button>
        </div>
      </div>
    );
  };