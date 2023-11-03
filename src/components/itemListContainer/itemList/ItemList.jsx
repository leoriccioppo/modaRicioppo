import { Item } from '../item/Item.jsx';
import { useProducts } from '../../../contexts/fakeStoreApiContext.jsx';
import { useFirebase } from '../../../firebase/firebaseContext.jsx';

import { Loading } from '../../../components/loading/Loading.jsx';

const ItemList = () => {
  const { items: firebaseItems, loading: firebaseLoading } = useFirebase();
  const { products: fakeStoreItems, loading: fakeStoreLoading } = useProducts();

  const combinedItems = [...firebaseItems, ...fakeStoreItems];

  if (firebaseLoading || fakeStoreLoading) {
    return <Loading />; // Exibe o loading enquanto os dados estão sendo carregados
  }

  return (
    <div >
      {combinedItems.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
  
};


export { ItemList };