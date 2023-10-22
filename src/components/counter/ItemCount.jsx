import React, { useState } from 'react';
import { PiCaretUpBold } from 'react-icons/pi';
import { PiCaretDownBold } from 'react-icons/pi';

const ItemCount = ({ stock, onAddToCart}) => {
  const [quantity, setQuantity] = useState(0); // Inicializa count com 0 usando useState

  const handleIncrement = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    onAddToCart(quantity); // Emite o evento onAdd com a quantidade
    setQuantity(0); // Zera o contador
  };

  return (
    <div>
      <div className='counterUp' onClick={handleIncrement}><PiCaretUpBold/></div>
      <div className='QuantityItems'>{quantity}</div>
      <div className='counterDown' onClick={handleDecrement}><PiCaretDownBold/></div>
      <button onClick={handleAddToCart}>Add to shop bag</button>
    </div>
  );
};

export { ItemCount };
