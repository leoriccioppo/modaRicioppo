import styled from "@emotion/styled";
import { Paper, Box } from "@mui/material";
import Card from '@mui/material/Card';

export const Product = styled(Card)(({ theme }) => ({
    Width: "100%",
    height:"100%",
    overflowX: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      width: "100%",
      heigth:"80%"
    }, 
    [theme.breakpoints.up("xs")]: {
      width: "80%",
      heigth:"70%"
    },
    
  }));

  export const ProductImage = styled("img")(({ src, theme }) => ({
    src: `url(${src})`,
    width: "100%",
    height: "100%",
    padding: "8px",
    borderRadius:"8px",
  }));

  export const ProductDataWrapper = styled(Box)(({theme}) => ({
    padding: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

  }));