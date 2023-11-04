import { createTheme } from "@mui/material";
import { cyan, yellow } from "@mui/material/colors";

const LightTheme = createTheme({
    palette: {
        mode: 'light',
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
            paper: 'red',
            default:'pink',         
        }
    },

    components: {
        MuiModalRoot: {
          styleOverrides: {
            root: {
              height: '100%', // Defina a altura desejada para o modal aqui
            },
          },
        },
      },
    });

export { LightTheme };