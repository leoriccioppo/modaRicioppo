import { PiShoppingCartSimple } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const CartWidget = ({totalItems}) => {

  
  return (
    <Link to="/Cart"><div className='icon'>
      {totalItems > 0 && <PiShoppingCartSimple />}
      {totalItems > 0 && <span className='item-count'>{totalItems}</span>}
    </div></Link>
  );
};

export { CartWidget };
