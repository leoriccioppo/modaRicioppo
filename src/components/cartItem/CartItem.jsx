import { useCart } from '../../contexts/cartContext.jsx';

const CartItem = ({ item }) => {
  const { id, title, price, quantity, image } = item;
  const { removeItem } = useCart();

  const handleRemoveItem = () => {
    removeItem(id, quantity);
  };

  return (
    <div className="item">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>Price: ${price}</p>
      <p>Quantity: {quantity}</p>
      <button onClick={handleRemoveItem}>Remove from cart</button>
    </div>
  );
  
};


export { CartItem };
