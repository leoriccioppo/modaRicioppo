import React from 'react';
import { PiShoppingCartSimple } from 'react-icons/pi';
import { useCart } from '../../contexts/cartContext.jsx';
import { Link } from 'react-router-dom';

const CartWidget = () => {

  const { cart } = useCart();

   // Calcula a quantidade total de itens no carrinho
   const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  
  return (
    <Link to="/Cart"><div className='icon'>
      {totalItems > 0 && <PiShoppingCartSimple />}
      {totalItems > 0 && <span className='item-count'>{totalItems}</span>}
    </div></Link>
  );
};

export { CartWidget };
