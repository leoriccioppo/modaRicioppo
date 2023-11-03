import React from 'react';
import { ItemCount } from '../../counter/ItemCount';

const Item = ({ item }) => {
  const { id, title, category, description, price, image, stock } = item;

  const itemStock = stock !== undefined ? stock : 10;

  return (
    <div className="item">
      <img src={image} alt={title} />
      
      <p>Price: ${price}</p>
      <ItemCount stock={itemStock} itemId={id} />
    </div>
  );
};

export { Item };