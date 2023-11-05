import { createContext, useState, useContext } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { DarkTheme, LightTheme } from "../themes";
import { Box } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';

const ThemeContext = createContext();

const AppThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState('Light');
    const toggleTheme = () => {
        setTheme(theme === 'Light' ? 'Dark' : 'Light');
      };
    
      const selectedTheme = theme === 'Light' ? LightTheme : DarkTheme;
    
    return (
        <ThemeContext.Provider 
        value={{ 
            theme, 
            toggleTheme
             }}>
      <ThemeProvider theme={selectedTheme}>
        <CssBaseline />
        <Box height="100%" bgcolor={selectedTheme.palette.background.default}>
        {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
    );
};

const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
      throw new Error("useTheme must be used within an AppThemeProvider");
    }
    return context;
  };

  export { AppThemeProvider, useTheme };
