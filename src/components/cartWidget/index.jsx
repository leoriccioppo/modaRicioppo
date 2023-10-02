import React from 'react';
import { PiShoppingCartSimple } from 'react-icons/pi';

const CartWidget = ({ cartCount }) => {

  return(
    <div className='icon'>
      <PiShoppingCartSimple/>
    </div> 
  )
  }

 export { CartWidget }