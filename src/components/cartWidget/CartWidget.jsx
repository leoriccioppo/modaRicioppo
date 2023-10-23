import React from 'react';
import { PiShoppingCartSimple } from 'react-icons/pi';
import { useCart } from '../../contexts/cartContext.jsx';

const CartWidget = () => {
  const { cart } = useCart();

  return (
    <div className='icon'>
      <PiShoppingCartSimple />
      <span>{cart.length}</span>
    </div>
  );
};

export { CartWidget };
