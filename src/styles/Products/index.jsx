import styled from "@emotion/styled";
import { Paper } from "@mui/material";
import Card from '@mui/material/Card';

export const Product = styled(Card)(({ theme }) => ({
    width: "50%",
    overflowX: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      position: "relative",
    },
    
  }));

  export const ProductImage = styled("img")(({ src, theme }) => ({
    src: `url(${src})`,
    width: "100%",
    padding: '10px',
    [theme.breakpoints.down("md")]: {
      width: "80%", 
      padding: '24px',
    },
  }));