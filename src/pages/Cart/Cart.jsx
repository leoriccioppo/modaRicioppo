import { useCart } from '../../contexts/cartContext.jsx';
import { CartItem } from '../../components/cart/cartItem/CartItem.jsx';
import { Loading } from '../../components/loading/Loading.jsx';

const Cart = () => {
  const { cart, loading, removeItem } = useCart();

  const handleRemoveItem = (itemId, quantity) => {
    removeItem(itemId, quantity);
  };

  return (
    <div className="item-list">
      {loading ? (
        <Loading />
      ) : cart.length > 0 ? (
        cart.map(item => (
          <CartItem key={item.id} item={item} onRemove={handleRemoveItem} />
        ))
      ) : (
        <p>Seu carrinho está vazio.</p>
      )}
    </div>
  );
};

export { Cart };
