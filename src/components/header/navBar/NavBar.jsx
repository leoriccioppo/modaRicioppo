import React from 'react';
import { CartWidget } from '../../cart/cartWidget/CartWidget';
import { Link } from 'react-router-dom';
import { MyList } from '../../../styles/Header';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography'


const NavBar = ({type}) =>{
    return (
        <MyList type={type} component="nav" 
        sx={{width:'100%'}}
       >

      <ListItem component={Link} to="/WomensClothing" sx={{justifyContent:'center'}}>
        <Typography variant="h5" sx={{ textTransform: 'uppercase' }}>
          Woman
        </Typography>
      </ListItem>

      <ListItem component={Link} to="/MensClothing" sx={{ justifyContent:'center' }}>
        <Typography variant="h5" sx={{ textTransform: 'uppercase' }}>
          Men
        </Typography>
      </ListItem>

      <ListItem component={Link} to="/Jewelery" sx={{ justifyContent:'center' }}>
        <Typography variant="h5" sx={{ textTransform: 'uppercase' }}>
          Jewelry
        </Typography>
      </ListItem>

      <ListItem component={Link} to="/Electronics" sx={{ justifyContent:'center' }}>
        <Typography variant="h5" sx={{ textTransform: 'uppercase' }}>
          Electronics
        </Typography>
      </ListItem>

      <CartWidget />

    </MyList>
 )
}

export { NavBar };