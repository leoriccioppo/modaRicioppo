import React from 'react';
import { Box, Button, Container, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { ItemList } from './itemList/ItemList.jsx';

const ItemListContainer = () =>{

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));

    return (
       <Box>
        <Grid >

            <ItemList/>
        </Grid>
       </Box>
    )
}

export { ItemListContainer };