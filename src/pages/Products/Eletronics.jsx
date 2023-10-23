import React, { useContext } from 'react';
import { useProducts } from '../../contexts/productsContext.jsx';
import { Item } from '../../components/itemListContainer/item/Item.jsx';

const Eletronics = () => {
    const { products, loading } = useProducts();

    const filteredProducts = products.filter(item =>{
        return item.category === 'electronics';
    })

    return (
            <div className="item-list">
                {loading ? (
                    <p>Carregando dados...</p>
                ) : (
                    filteredProducts.map(item => (
                        <Item key={item.id} item={item} />
                    ))
                )}
            </div>
        );
 }

export { Eletronics }