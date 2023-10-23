import React, { useContext } from 'react';
import { Item } from '../item/Item.jsx';
import { useProducts } from '../../../contexts/productsContext.jsx';


const ItemList = () => {
  const { products, loading } = useProducts();


  return (
    <div className="item-list">
      {loading ? (
        <p>Carregando dados...</p>
      ) : (
        products.map((item) => <Item key={item.id} item={item} />)
      )}
    </div>
  );
  
};


export { ItemList };