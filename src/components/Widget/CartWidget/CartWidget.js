import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Cart/CartContext';

export const CartWidget = () => {

  const { qtyCart } = useContext(CartContext);

  return (
      <Link to="/cart" className='navCategoryIcon'>
          <FontAwesomeIcon icon={ faShoppingCart } />
          <span>{qtyCart()}</span>
      </Link>
    );
}
