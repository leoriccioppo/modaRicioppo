import React from 'react';
import { CartWidget } from '../../cart/cartWidget/CartWidget';
import { Link } from 'react-router-dom';
import { MyList } from '../../../styles/Header';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


const NavBar = ({type}) =>{
    return (
        <MyList type={type} component="nav" 
        sx={{ width: '100%', 
          }}>
      <ListItem component={Link} to="/WomensClothing" sx={{flexDirection: 'column'}}>
        <ListItemText primary="Woman" />
      </ListItem>

      <ListItem component={Link} to="/MensClothing" sx={{flexDirection: 'column'}}>
        <ListItemText primary="Men" />
      </ListItem>

      <ListItem component={Link} to="/Jewelery" sx={{flexDirection: 'column'}}>
        <ListItemText primary="Jewelery" />
      </ListItem>

      <ListItem component={Link} to="/Electronics" sx={{flexDirection: 'column'}}>
        <ListItemText primary="Electronics" />
      </ListItem>

      <CartWidget />

    </MyList>
 )
}

export { NavBar };