import React from "react";
import { Link } from "react-router-dom";
import { MapWidget } from "../../Widget/MapWidget/MapWidget";


export const Item = ({ id, categ, img, title, map, descr, price, stock }) => {
  
    return (
      <div className="card">
        <img src={img} alt={title}></img>
        <h4>{categ}</h4>
        <h3>{title}</h3>
        <div className="cardmap">
          <MapWidget/>
          <p className="descr">{map}</p>
        </div>
        <p className="descr">{descr}</p>
        <article className="priceLine">
          <p className="price">$ {price}</p>
          <p className={`stock ${stock > 0 && stock <= 20 ? 'stock' : 'stockSm'}`}>Últimos {stock} !</p>
        </article>
        <div className="cardBtnBox">
          <button className={`cardBtn ${stock === 0 ? 'btnNg' : 'cardBtn'}`}>
            <Link to={`/detalle/${id}`} className="cardBtnLink">Comprar</Link></button>
        </div>
      </div>
    );
  };