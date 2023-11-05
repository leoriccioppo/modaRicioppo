import React, { useState } from 'react';
import { useCart } from '../../contexts/cartContext.jsx';
import { useProducts } from '../../contexts/fakeStoreApiContext.jsx';
import IconButton from '@mui/material/IconButton';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Box, Typography } from '@mui/material';

const ItemCount = ({ stock}) => {
  const [quantity, setQuantity] = useState(0); // Inicializa count com 0 usando useState

  const { onAddToCart} = useCart(); // Obtém a função onAddToCart do contexto de carrinho
  
  const { products } = useProducts(); // Obtém a lista de produtos do contexto de produtos

  const handleIncrement = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };


  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <IconButton style={{ padding: '0' }} onClick={handleIncrement} color="primary" aria-label="Arrow Up">
      <ArrowDropUpIcon />
    </IconButton>

    <Typography variant="p" component="div">{quantity}</Typography>

    <IconButton style={{ padding: '0' }} onClick={handleDecrement} color="primary" aria-label="Arrow Down">
      <ArrowDropDownIcon />
    </IconButton>
    </Box>
  );
};


export { ItemCount };
