import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Box, Typography } from '@mui/material';

const ItemCount = ({handleClickUp, handleClickDown, quantity}) => {
  
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <IconButton style={{ padding: '0' }} onClick={handleClickUp} color="primary" aria-label="Arrow Up">
      <ArrowDropUpIcon />
    </IconButton>

    <Typography variant="body2" component="div">{quantity}</Typography>

    <IconButton style={{ padding: '0' }} onClick={handleClickDown} color="primary" aria-label="Arrow Down">
      <ArrowDropDownIcon />
    </IconButton>
    </Box>
  );
};


export { ItemCount };
