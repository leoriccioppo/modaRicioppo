import React from 'react';

const Item = ({ item }) => {
  const { id, title, category, description, price, image } = item;

  return (
    <div className="item">
      <img src={image} alt={title} />
      <h2>{category}</h2>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Price: ${price}</p>
    </div>
  );
};

export { Item };