import React from 'react';
import { ItemCount } from '../../counter/ItemCount';

const Item = ({ item, addToCart }) => {
  const { id, title, category, description, price, image } = item;

  const handleAddToCart = (quantity) => {
    addToCart(id, quantity);
  };

  return (
    <div className="item">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>Price: ${price}</p>
      <ItemCount stock={10} onAddToCart={handleAddToCart}/>
    </div>
  );
};

export { Item };