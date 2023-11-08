const increaseCounterShop = () => {
    if(quantityItem > stock) {
        setQuantity(quantityItem + 1);
        console.log('clicou');
      }
    
  };
  
  const decreaseCounterShop = (quantityItem, setQuantity) => {
    if (quantityItem > 1) {
      setQuantity(quantityItem - 1);
      console.log('clicou');
    }
  };
  
  export { increaseCounterShop, decreaseCounterShop };
  