import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Cart/CartContext';


export const CartWidget = () => {

  const { cantidadCart } = useContext(CartContext);

  return (
      <Link to="/cart" className='navCategoryIcon'>
          <FontAwesomeIcon icon={ faShoppingCart } />
          <span>{cantidadCart()}</span>
      </Link>
    );
}