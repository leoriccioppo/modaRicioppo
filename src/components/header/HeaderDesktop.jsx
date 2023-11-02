import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import{ NavBar} from './navBar/NavBar';
import { AppBarContainer } from '../../styles/Header';
import { Brand } from './navBar/Brand';
function HeaderDesktop() {
  return (
    <AppBarContainer>
        <Toolbar sx={{ width: '100%'}} >   
        <Brand/>  
        <NavBar type="row"/>
        </Toolbar>
    </AppBarContainer>
  );
}

export { HeaderDesktop } ;
