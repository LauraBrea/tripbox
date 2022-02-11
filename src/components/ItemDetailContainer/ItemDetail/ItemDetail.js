import React from "react";
import { Link } from "react-router-dom";
import { MapWidget } from "../../Widget/MapWidget/MapWidget";
import { ItemCount } from "../ItemCount/ItemCount";
import "./ItemDetail.css";

export const ItemDetail = ({id, name, img, description, included, price, map, stock, category}) => {

  return (
    <article className="productDetail">
        <img className="prodimg" src={img} alt={name} />
        <div className="prodinfo">
            <Link to={`/categoria/${category}`}>
              <h4>{category}</h4>
            </Link>
            <h1>{name}</h1>
            <div className="productmap">
              <MapWidget/>
              <p className="productdescr">{map}</p>
            </div>
            <p>{description}</p>
            <p>{included}</p>
            <div>
              <h5>$ {price}</h5>
            </div>
            <ItemCount />
        </div>
    </article>
  )
}

