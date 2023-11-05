import React from 'react';
import { Box, Button, Container, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { ItemList } from './itemList/ItemList.jsx';

const ItemListContainer = () =>{

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));

    return (
       <Box alignItems="center">
        <Grid 
        container
        spacing={{ xs: 2, md: 3 }}
        justifyContent="center"
        sx={{  alignItems:"center"}}
        columns={{ xs: 4, sm: 8, md: 12 }}>

            <ItemList matches={matches} />
        </Grid>
       </Box>
    )
}

export { ItemListContainer };