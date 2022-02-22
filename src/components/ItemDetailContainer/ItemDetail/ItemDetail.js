import React from "react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MapWidget } from "../../Widget/MapWidget/MapWidget";
import { CartContext } from "../../Cart/CartContext";
import { ItemCount } from "../ItemCount/ItemCount";
import "./ItemDetail.css";


export const ItemDetail = ({id, name, img, description, included, price, map, stock, category}) => {

    const [endPurchase, showEndPurchase] = useState(false);

    const { addToCart } = useContext(CartContext);

    const onAdd = (qty) => {   
      
      if (qty !== 0) {

        showEndPurchase(true);

        const addItem = { id, img, name, price}
        addToCart(addItem, qty);
      }
  }

  return (
    <div className="productDetail">
        <div className="productimg" >
            <img src={img} alt={name} />
        </div>
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
            {
              endPurchase 
              ? 
                <div className="stockContainer">
                    <Link to="/cart"><button className="addCartButton">Finalizar Compra</button></Link>
                    <Link to="/"><button className="addCartButton">Seguir Comprando</button></Link>
                </div>
              :
                <>
                    <div>
                      <ItemCount max={stock} onAdd={onAdd} />
                    </div>
                </>
            }
        </div>
    </div>
  )
}

/*
export const ItemDetail = ({id, name, img, description, included, price, map, stock, category}) => {

    const { addToCart, isInCart } = useContext(CartContext);

    const onAdd = (qty) => {   
      if (qty === 0) return

      if (!isInCart(id)) {

          const addItem = { id, img, name, price, qty }
          addToCart(addItem);
      }
  }

  return (
    <div className="productDetail">
        <div className="productimg" >
            <img src={img} alt={name} />
        </div>
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
            {
              isInCart(id) 
              ? 
                <div className="stockContainer">
                    <Link to="/cart"><button className="addCartButton">Finalizar Compra</button></Link>
                    <Link to="/"><button className="addCartButton">Seguir Comprando</button></Link>
                </div>
              :
                <>
                    <div>
                      <ItemCount max={stock} onAdd={onAdd} />
                    </div>
                </>
            }
        </div>
    </div>
  )
}
*/