import { createContext, useState, useContext, useCallback } from "react";

const DrawerContext = createContext();

const DrawerProvider = ({ children }) => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const toggleDrawer = useCallback(()=> {
      setIsDrawerOpen(prevState => !prevState);
      }, []);
    
    return (
        <DrawerContext.Provider 
        value={{ 
            isDrawerOpen, 
            toggleDrawer
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
