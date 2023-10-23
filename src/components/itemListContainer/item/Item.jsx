import React from 'react';
import { ItemCount } from '../../counter/ItemCount';

const Item = ({ item }) => {
  const { id, title, category, description, price, image } = item;

  return (
    <div className="item">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>Price: ${price}</p>
      <ItemCount stock={10} itemId={id} />
    </div>
  );
};

export { Item };