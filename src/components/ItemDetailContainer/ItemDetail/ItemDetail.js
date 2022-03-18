import React from "react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MapWidget } from "../../Widget/MapWidget/MapWidget";
import { CartContext } from "../../Cart/CartContext";
import { ItemCount } from "../ItemCount/ItemCount";
import "./ItemDetail.css";


export const ItemDetail = ({id, name, img, description, included, price, map, stock, category}) => {

    const [qty, setQty] = useState(0);

    const { addToCart, isInCart } = useContext(CartContext);

    const onAdd = () => {   
      if (qty === 0) return

      if (!isInCart(id)) {
          const addItem = { id, img, name, price, qty, stock}
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
                      <Link to="/"><button className="addCartButtonNg">Seguir Comprando</button></Link>
                  </div>
                :
                  <>
                      <div className="counterGroupAdd">
                        <ItemCount max={stock} count={qty} setCount={setQty} />
                        <button onClick={ onAdd } className="addCartButton">Agregar al carrito</button>
                      </div>
                  </>
              }
        </div>
    </div>
  )
}
