import { Item } from '../item/Item.jsx';
import { useProducts } from '../../../contexts/fakeStoreApiContext.jsx';
import { useFirebase } from '../../../firebase/firebaseContext.jsx';
import { Loading } from '../../../components/loading/Loading.jsx';
import { Grid } from "@mui/material";

let combinedItems = [];

const ItemList = ({matches}) => {
  const { items: firebaseItems, loading: firebaseLoading } = useFirebase();
  const { products: fakeStoreItems, loading: fakeStoreLoading } = useProducts();

  combinedItems = [...firebaseItems, ...fakeStoreItems];


  if (firebaseLoading || fakeStoreLoading) {
    return <Loading />; // Exibe o loading enquanto os dados estão sendo carregados
  }

  return (
    <>
      {combinedItems.map((item) => (
        <Grid item key={item.id} xs={12} sm={4} md={4} display="flex" flexDirection={'column'} alignItems="center" justifyContent ="center">
        <Item item={item} matches={matches} />
        </Grid>
      ))}
    </>
  );
  
};


export { ItemList, combinedItems };