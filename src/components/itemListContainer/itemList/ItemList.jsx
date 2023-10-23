import React, { useContext } from 'react';
import { Item } from '../item/Item.jsx';
import { useProducts } from '../../../contexts/productsContext.jsx';
import { Loading } from '../../../components/loading/Loading.jsx';

const ItemList = () => {
  const { products, loading } = useProducts();


  return (
    <div className="item-list">
      {loading ? (
        <Loading />
      ) : (
        products.map((item) => <Item key={item.id} item={item} />)
      )}
    </div>
  );
  
};


export { ItemList };