import { createTheme } from "@mui/material";
import { cyan, yellow } from "@mui/material/colors";

const DarkTheme = createTheme({
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
            paper: '#303134',
            default:'#202124'         
        }
    },
})

export { DarkTheme };