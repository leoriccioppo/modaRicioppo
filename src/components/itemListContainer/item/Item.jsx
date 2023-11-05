import React from 'react';
import { Product, ProductImage, ProductDataWrapper } from '../../../styles/Products';
import Typography from '@mui/material/Typography'
import { Paper, Box, Container } from "@mui/material";
import { ActionsBar } from '../../actionsBar/ActionsBar';
const Item = ({ item, matches}) => {
  const { id, title, category, description, price, image, stock } = item;

  const itemStock = stock !== undefined ? stock : 10;

  return (
    <Product>
      <Box  height="380px" width="100%" >
      <ProductImage src={image} alt={title} />
      </Box>

      <ProductDataWrapper >

      <Typography variant={matches ? "subtitle1" : "h6"} sx={{ textTransform: 'uppercase', display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp:1, overflow: 'hidden'}}>{title}</Typography>

      <Typography variant={matches ? "body2" : "body1"} sx={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 3, overflow: 'hidden' }}>{description}</Typography>

      <Typography variant={matches ? "subtitle1" : "h6"}>Price: ${price}</Typography>

      <ActionsBar itemStock={itemStock} id={id} />

      </ProductDataWrapper>   
    </Product>
  );
};

export { Item };