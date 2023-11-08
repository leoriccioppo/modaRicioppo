import React  from 'react';
import { Item } from '../item/Item.jsx';
import { Grid } from "@mui/material";
import { useProducts } from '../../../contexts/productsContext.jsx';
import{ useCart } from '../../../contexts/cartContext';

const ItemList = ({matches}) => {

  const { allItems, quantityItem, increaseCounterShop, decreaseCounterShop, handleDecreaseCounterShop } = useProducts();
  const { onAddToCart } = useCart();




  return (
    <>
      {allItems.map((item) => (
  <Grid item key={item.id} 
    xs={12} 
    sm={4} 
    md={4} 
    display="flex" 
    flexDirection={'column'}
   alignItems="center"
   justifyContent="center">
    <Item 
      item={item} 
      matches={matches} 
      handleClickUp={() => increaseCounterShop({ item })}
      handleClickDown={() => handleDecreaseCounterShop({item})}
      onClick={onAddToCart} 
      quantity={item.quantity}
      message="Add to cart"
    />
  </Grid>
))}
    </>
  );
  
};


export { ItemList };