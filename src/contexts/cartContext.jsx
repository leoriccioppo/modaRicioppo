import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const onAddToCart = (product, quantity) => {
    const { id, title, price } = product; // Extrai as informações necessárias do objeto do produto
    console.log(`Item ${title} (ID: ${id}) added to cart with quantity: ${quantity} and price: $${price * quantity}`);
    // Adicione o item ao carrinho, fazendo os cálculos necessários com o preço se necessário
  };

  return (
    <CartContext.Provider 
    value={{ 
        cart, 
        onAddToCart 
        }}
        >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };