import { createTheme } from "@mui/material";
import { cyan, yellow } from "@mui/material/colors";

const LightTheme = createTheme({
    palette: {
        primary: {
            main: yellow[700],
            dark: yellow[800],
            light: yellow[300],
            contrastText: '#ffffff'
        },
        secondary:{
            main: cyan[500],
            dark: cyan[400],
            light: cyan[300],
            contrastText: '#ffffff',
        },
        background: {
            paper: '#ffffff',
            default:'#f7f6f3'         
        }
    },

    MuiCssBaseline: {
        styleOverrides: {
          li: {
            listStyle: 'none',
            margin: 0,
            padding: 0,
          },
          a: {
            textDecoration: 'none',
            color: 'inherit',
          },
        },
      },
})

export { LightTheme };