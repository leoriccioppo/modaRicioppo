import React from 'react';
import SearchIcon from "@mui/icons-material/Search";  
import { IconButton } from '@mui//material'
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

        <IconButton>
          <SearchIcon />
        </IconButton>
        </Toolbar>
    </AppBarContainer>
  );
}

export { HeaderDesktop } ;
