import { Item } from '../item/Item.jsx';
import { Grid } from "@mui/material";
import { useProducts } from '../../../contexts/productsContext.jsx'


const ItemList = ({matches}) => {

  const { allItems } = useProducts();


  return (
    <>
      {allItems.map((item) => (
        <Grid item key={item.id} xs={12} sm={4} md={4} display="flex" flexDirection={'column'} alignItems="center" justifyContent ="center">
        <Item item={item} matches={matches} />
        </Grid>
      ))}
    </>
  );
  
};


export { ItemList };