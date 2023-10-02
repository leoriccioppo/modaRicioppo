import React from 'react';
import { PiShoppingCartSimple } from 'react-icons/pi';

const CartWidget = ({ cartCount }) => {

  return(
    <div className='icon'>
      <PiShoppingCartSimple/>
     {cartCount > 0 && <span className='cartItemCount'>{cartCount}</span>}
    </div> 
  )
  }

 export { CartWidget }