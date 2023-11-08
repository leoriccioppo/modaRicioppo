import React from "react";
import { AppBarContainer } from "../../styles/Header/index.jsx";
import { Brand } from "./navBar/Brand.jsx";
import { IconButton, Toolbar } from "@mui/material"; 
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";  
import { useDrawer } from '../../contexts/drawerContext';
import { NavMobile } from "./navBar/NavMobile.jsx";


function HeaderMobile({ matches }) {

  const { setDrawerOpen} = useDrawer ();

  return (
    <>
    <AppBarContainer>
      <Toolbar sx={{ width: '100%',
        justifyContent: 'space-around',
    }}>
        <IconButton onClick={() => setDrawerOpen(true)}>
          <MenuIcon />
        </IconButton>

        <Brand sx={{ alignItems: 'center' }} />  

        <IconButton>
          <SearchIcon />
        </IconButton>
        
      </Toolbar>
    </AppBarContainer>
    
    <NavMobile/>
    </>
  );
}

export { HeaderMobile };
