import { Item } from '../item/Item.jsx';
import { useProducts } from '../../../contexts/fakeStoreApiContext.jsx';
import { useFirebase } from '../../../firebase/firebaseContext.jsx';
import { Box } from '@mui/system';

import { Loading } from '../../../components/loading/Loading.jsx';

let combinedItems = [];

const ItemList = () => {
  const { items: firebaseItems, loading: firebaseLoading } = useFirebase();
  const { products: fakeStoreItems, loading: fakeStoreLoading } = useProducts();

  combinedItems = [...firebaseItems, ...fakeStoreItems];

  if (firebaseLoading || fakeStoreLoading) {
    return <Loading />; // Exibe o loading enquanto os dados estão sendo carregados
  }

  return (
    <Box >
      {combinedItems.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </Box>
  );
  
};


export { ItemList, combinedItems };