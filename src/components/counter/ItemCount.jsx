import React, { useState } from 'react';
import { PiCaretUpBold } from 'react-icons/pi';
import { PiCaretDownBold } from 'react-icons/pi';
import { useCart } from '../../contexts/cartContext.jsx';
import { useProducts } from '../../contexts/productsContext.jsx';

const ItemCount = ({ stock, itemId}) => {
  const [quantity, setQuantity] = useState(0); // Inicializa count com 0 usando useState

  const { onAddToCart } = useCart(); // Obtém a função onAddToCart do contexto de carrinho
  
  const { products } = useProducts(); // Obtém a lista de produtos do contexto de produtos

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
    const itemDetails = products.find(product => product.id === itemId);
    onAddToCart(itemDetails, quantity);
    setQuantity(0);
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
