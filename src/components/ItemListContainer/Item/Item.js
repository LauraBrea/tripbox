import React from "react";
import { Link } from "react-router-dom";
import { MapWidget } from "../../Widget/MapWidget/MapWidget";

export const Item = ({ id, categ, img, title, map, descr, price }) => {
  
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
        <p className="price">$ {price}</p>
        <div>
          <Link to={`/detalle/${id}`} className="cardbuttons">
            <button className="btn">Comprar</button>
          </Link>
        </div>
      </div>
    );
  };