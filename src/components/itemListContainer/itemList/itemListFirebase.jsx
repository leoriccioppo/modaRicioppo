import React, { useContext } from 'react';
import { Item } from '../item/Item.jsx';
import { useFirebase } from '../../../firebase/firebaseContext.jsx'
import { Loading } from '../../../components/loading/Loading.jsx';
import { useProducts } from '../../../contexts/productsContext.jsx'

const ItemListFirebase = () =>{

    const { items } = useFirebase();
    const { loading } = useProducts();
    

    return(
        <div className="item-list">
            {loading ? (
        <Loading />
      ) : (
        items.map((item) => <Item key={item.id} item={item} />)
      )}
        </div>
    )
}

export { ItemListFirebase };