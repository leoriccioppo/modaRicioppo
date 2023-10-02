import React from 'react';
import { ItemCount } from '../counter/ItemCount';


const ItemListContainer = () =>{

    return (
       <div>
        <p>
            Lorem ipsum dolor sit amet, 
            consectetur adipisicing elit. 
            Repellendus laborum corrupti vitae cupiditate necessitatibus 
            quos mollitia excepturi temporibus sint quisquam ducimus, 
            delectus inventore alias pariatur. 
            Quaerat fuga illum quibusdam possimus.
            
        </p>
        <ItemCount stock={5}/>
       </div>
    )
}

export { ItemListContainer };