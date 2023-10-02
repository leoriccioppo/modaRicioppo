import React, { useState } from 'react';
import { PiCaretUpBold } from 'react-icons/pi';
import { PiCaretDownBold } from 'react-icons/pi';



const ItemCount = ({ stock }) =>{
const [count, setCount] = useState(0);

const handleIncrement = () => {
    if (count < stock) {
        setCount(count + 1);
    }
};

const handleDecrement = () => {
    if (count > 0) {
        setCount(count - 1);
    }
};

const handleAddToCart = () => {
    
  };

    return(
        <div>
            <div className='counterUp'  onClick={handleIncrement}><PiCaretUpBold/></div>
            <div className='QuantityItems'>{count}</div>
            <div className='counterDown'onClick={handleDecrement}><PiCaretDownBold/></div>
            <button>Adicionar ao Carrinho</button>
        </div>
    )
}

export { ItemCount }