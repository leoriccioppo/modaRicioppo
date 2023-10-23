import React, { createContext, useContext, useState } from 'react';

const StockContext = createContext();

const StockProvider = ({ children }) => {
    const [quantity, setQuantity] = useState(0);
  
    

      return (
        <StockContext.Provider value={{ quantity}}>
          {children}
        </StockContext.Provider>
      );
};

const useStock = () => useContext(StockContext);

export { StockProvider, useStock };