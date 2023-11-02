import React from "react";
import { AppBarContainer } from "../../styles/Header/index.jsx";
import { Brand } from "./navBar/Brand.jsx";
import { IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"; 
import SearchIcon from "@mui/icons-material/Search";  

function HeaderMobile({ matches }) {
  return (
    <AppBarContainer>
      <Toolbar sx={{ width: '100%',
        justifyContent: 'space-around',
    }}>
        <IconButton>
          <MenuIcon />
        </IconButton>

        <Brand sx={{ alignItems: 'center' }} />  

        <IconButton>
          <SearchIcon />
        </IconButton>
      </Toolbar>
    </AppBarContainer>
  );
}

export { HeaderMobile };
