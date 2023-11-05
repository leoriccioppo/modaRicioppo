
import { useCart } from '../../contexts/cartContext';
import { useProducts } from '../../contexts/productsContext';

export const handleAddToCart = (itemId, quantity) => {
    const { onAddToCart, setQuantity } = useCart(); // Certifique-se de que onAddToCart e setQuantity estão disponíveis no contexto
  
    const { allItems } = useProducts();
    const item = allItems.find(item => item.id === itemId);
  
    if (quantity > 0) {
      onAddToCart(item, quantity);
      setQuantity(0); // Se você está usando useState para controlar a quantidade, você precisa resetá-la aqui
    }
  };