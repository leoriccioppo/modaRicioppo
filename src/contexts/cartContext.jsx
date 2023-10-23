import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //itens no carrinho + quantidade
  const onAddToCart = (product, quantity) => {
    const { id, title, price, image } = product;
    const newItem = { id, title, price, image, quantity };
  
    const alreadyInCart = cart.find(item => item.id === id);
  
    if (!alreadyInCart) {
      // Se o item não estiver no carrinho, adiciona-o ao carrinho
      setCart([...cart, newItem]);
    } else {
      // Se o item já estiver no carrinho, atualiza a quantidade do item existente
      setCart(cart.map(item => (item.id === id ? { ...item, quantity: item.quantity + quantity } : item)));
    }
  };
  
  //itens no carrinho - quantidade 
  const removeItem = (itemId, quantityToRemove) => {
    // Remove o item do carrinho e subtrai a quantidade especificada
    const updatedCart = cart.map(item => (item.id === itemId ? { ...item, quantity: item.quantity - quantityToRemove } : item)).filter(item => item.quantity > 0);
    setCart(updatedCart);
  };


  //remove tudo do carrinho
  const clear = () => {
    setCart([]);
  };
    
  return (
    <CartContext.Provider 
    value={{ 
        cart, 
        onAddToCart,
        removeItem,
        clear
        }}
        >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };