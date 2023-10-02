import React from 'react';

const Item = ({ item }) => {
  const { id, title, description, price, pictureUrl } = item;

  return (
    <div className="item">
      <img src={pictureUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Price: ${price}</p>
    </div>
  );
};

export { Item };