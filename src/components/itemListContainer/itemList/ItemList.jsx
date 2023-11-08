import React from 'react';
import { Item } from '../item/Item.jsx';
import { Grid } from "@mui/material";
import { useProducts } from '../../../contexts/productsContext.jsx';
import{ useCart } from '../../../contexts/cartContext';
import { increaseCounterShop, decreaseCounterShop } from '../../../utils/counter'


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
      handleClickDown={() => handleDecreaseCounterShop(item)}
      quantity={quantityItem} 
      onClick={onAddToCart} 
      message="Add to cart"
    />
  </Grid>
))}
    </>
  );
  
};


export { ItemList };