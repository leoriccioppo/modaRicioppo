import { createContext, useState, useEffect, useContext } from 'react';
import { fetchDataFromFirebase } from '../services/firebase/serviceFirebase';
import { fetchDataFakeStore } from '../services/api.serviceFakeStore'


const ProductsContext = createContext();

const ProductsProvider = ({children})=>{

    const [allItems, setAllItems] = useState([]);
    const [quantity ,setQuantity] = useState({});

    useEffect(() => {
    const getAllItems = async () => {
      console.log('useEffect foi chamado');
      try {
        const firebaseItems = await fetchDataFromFirebase(); // Obter dados do Firebase
        const fakeStoreProducts = await fetchDataFakeStore('/products'); // Obter dados do FakeStore

        // Combinar dados do Firebase e FakeStore
        const mergedItems = [...firebaseItems, ...fakeStoreProducts];

        // Adicionar a propriedade 'stock' aos itens que não a possuem
        const itemsWithStock = mergedItems.map(item => {
          if (!item.hasOwnProperty('stock')) {
            return { ...item, stock: 10 }; 
          }
          return item;
        });

        // Inicializar a propriedade 'quantity' com 0 aos itens que não a possuem
      for (const item of itemsWithStock) {
        if (!item.hasOwnProperty('quantity')) {
          item.quantity = 0;
        }
      }
        // Atualizar o estado com os dados combinados
        const initialQuantities = itemsWithStock.reduce((quantity, item) => {
          quantity[item.id] = item.quantity;
          return quantity;
        }, {});

        setAllItems(itemsWithStock);
        setQuantity(initialQuantities);
        console.table(itemsWithStock);

      } catch (error) {
        console.error('Error fetching products data:', error);
      }
    };

     getAllItems();// Chamar a função para buscar dados quando o componente for montado
  }, []); // Array de dependências vazio para garantir que seja chamado apenas uma vez

  const increaseCounterShop = ({ item }) => {
    console.log('Item inside increaseCounterShop:', item);
    if ( item.quantity >= item.stock) {
      console.log('Item or stock is undefined or quantity exceeds stock.');
    } else {
      setQuantity(item.quantity ++);
      console.log('clicou +');
    }
  };
  
    const decreaseCounterShop = ({item}) => {
    if ( item.quantity > 0){
      setQuantity(item.quantity --);
    }
  };

    return (
        <ProductsContext.Provider 
        value={{
            allItems,
            setQuantity,
            increaseCounterShop,
            decreaseCounterShop,
            }}>

            {children}

            </ProductsContext.Provider>
    );

};

const useProducts =  ()=> useContext(ProductsContext);

export{ ProductsProvider, useProducts }