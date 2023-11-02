import React from "react";
import { AppBarContainer } from "../../styles/Header/index.jsx";
import { Brand } from "./navBar/Brand.jsx";
import { IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"; // Importe o MenuIcon do Material-UI

function HeaderMobile({ matches }) {
  return (
    <AppBarContainer>
      <Toolbar>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Brand sx={{ alignItems: 'center' }} />  
      </Toolbar>
    </AppBarContainer>
  );
}

export { HeaderMobile };
