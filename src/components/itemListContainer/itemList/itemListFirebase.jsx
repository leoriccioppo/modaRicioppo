import { Item } from '../item/Item.jsx';
import { useFirebase } from '../../../firebase/firebaseContext.jsx'
import { Loading } from '../../../components/loading/Loading.jsx';
import { useProducts } from '../../../contexts/fakeStoreApiContext.jsx'

const ItemListFirebase = () =>{

    const { items } = useFirebase();
    const { loading } = useProducts();
    

    return(
        <h1></h1>
    )
}

export { ItemListFirebase };