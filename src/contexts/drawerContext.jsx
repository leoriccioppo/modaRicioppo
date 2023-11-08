import { createContext, useState, useContext, useCallback } from "react";

const DrawerContext = createContext();

const DrawerProvider = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  
  const DrawerWidth = '50vw';
    
    return (
        <DrawerContext.Provider 
        value={{ 
          drawerOpen, 
          setDrawerOpen,
          DrawerWidth
             }}>
            {children}
    </DrawerContext.Provider>
    );
};

const useDrawer = () => {
    const context = useContext(DrawerContext);
    if (!context) {
      throw new Error("useDrawer must be used within a DrawerProvider");
    }
    return context;
  };

  export { DrawerProvider, useDrawer };
