import React from 'react';
import { ItemList } from './itemList/ItemList.jsx';
import { ItemListFirebase } from './itemList/itemListFirebase.jsx';

const ItemListContainer = () =>{

    return (
       <div>
        
        <div className="item-list-container">
            <h2>Lista de Itens:</h2>
            <ItemList />
            <ItemListFirebase/>
        </div>

       </div>
    )
}

export { ItemListContainer };