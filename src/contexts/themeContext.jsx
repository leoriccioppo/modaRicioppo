import React, { createContext, useState, useContext } from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { DarkTheme, LightTheme } from "../themes";
import { Box } from "@mui/material";

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
      <MuiThemeProvider theme={selectedTheme}>
        <Box width="100vw" height="100vh" bgcolor={selectedTheme.palette.background.default}>
        {children}
        </Box>
      </MuiThemeProvider>
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
