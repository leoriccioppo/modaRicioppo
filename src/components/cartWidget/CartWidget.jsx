import React, {useState} from 'react';
import { PiShoppingCartSimple } from 'react-icons/pi';


const CartWidget = () => {

  const [cartItems, setCartItems] = useState([]);

  const fetchProductById = async (productId) => {
    const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const product = await response.json();
    return product;
  };

  const addToCart = async (productId, quantity) => {
    try {
      const product = await fetchProductById(productId);
      const newItem = { ...product, quantity };
      setCartItems([...cartItems, newItem]);
      console.log(`Adicionando ${quantity} do produto ${productId} ao carrinho.`);
    } catch (error) {
      console.error('Erro ao adicionar item ao carrinho:', error);
    }
  };

  return(
    <div className='icon'>
      <PiShoppingCartSimple/>
      <span>{cartItems.length}</span>   {/* Mostra a quantidade de itens no carrinho */}
    </div> 
  )
  }

 export { CartWidget }