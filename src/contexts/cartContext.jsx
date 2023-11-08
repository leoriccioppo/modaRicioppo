import { createContext, useContext, useState } from 'react';
import { useProducts } from './productsContext';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const onAddToCart = (item, itemQuantity) => {
    const { id } = item;
  
    // Verifica se o item está no estoque
    if (stock[id] >= itemQuantity) {
      const newItem = { ...item, quantity: itemQuantity };
      const alreadyInCartIndex = cart.findIndex(item => item.id === id);
  
      // Se o item já está no carrinho, atualiza a quantidade
      if (alreadyInCartIndex !== -1) {
        const updatedCart = [...cart];
        updatedCart[alreadyInCartIndex].quantity += itemQuantity;
        setCart(updatedCart);
      } else {
        // Se o item não está no carrinho, adiciona-o
        setCart([...cart, newItem]);
      }
  
      // Atualiza o estoque
      setStock(prevStock => ({
        ...prevStock,
        [id]: prevStock[id] - itemQuantity
      }));
    } else {
      console.log("Estoque insuficiente para este item.");
    }
    setQuantity(0);
  };
 
  //itens no carrinho - quantidade 
  const removeItem = (itemId, quantityToRemove) => {
    // Remove o item do carrinho e subtrai a quantidade especificada
    const updatedCart = cart.map(item => (item.id === itemId ? { ...item, quantity: item.quantity - quantityToRemove } : item)).filter(item => item.quantity > 0);
    setCart(updatedCart);
    setStock(stock + quantityToRemove);
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