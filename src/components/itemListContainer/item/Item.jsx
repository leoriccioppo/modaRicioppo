import React from 'react';
import { ItemCount } from '../../counter/ItemCount';
import { Product, ProductImage } from '../../../styles/Products';

const Item = ({ item }) => {
  const { id, title, category, description, price, image, stock } = item;

  const itemStock = stock !== undefined ? stock : 10;

  return (
    <Product>
      <ProductImage src={image} alt={title} />
      <h1>{title}</h1>
      <h2>{description}</h2>
      <p>Price: ${price}</p>
      <ItemCount stock={itemStock} itemId={id} />
    </Product>
  );
};

export { Item };