import React from 'react';
import { ItemList } from './itemList/ItemList.jsx';

const ItemListContainer = () =>{

    return (
       <div>
        
        <div className="item-list-container">
            <h2>Lista de Itens:</h2>
            <ItemList />
        </div>

       </div>
    )
}

export { ItemListContainer };