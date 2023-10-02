import React, { useState, useEffect } from 'react';
import { Item } from '../item';

const ItemList = ({ items }) => {
  const [renderedItems, setRenderedItems] = useState([]);

  useEffect(() => {
    const loadItems = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(items);
        }, 2000);
      });
    };

    loadItems().then((loadedItems) => {
      setRenderedItems(loadedItems);
    });
  }, [items]);

  return (
    <div className="item-list">
      {renderedItems.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export { ItemList };
