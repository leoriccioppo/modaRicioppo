import React, { createContext, useState, useEffect, useContext } from 'react';
import { fetchData } from '../services/api.serviceFakeStore.js';

const FakeStoreContext = createContext();

const FakeStoreProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetchData('/products');
                setProducts(response);
            } catch(error){
                console.error('Erro ao obter dados da API:', error);
            }
        };

        fetchProducts();
    }, []); // Executa o efeito apenas uma vez, ao montar o componente

    return (
        <FakeStoreContext.Provider 
            value={{ 
                products
            }}>
            {children}
        </FakeStoreContext.Provider>
    );
};

const useFakeStore = () => useContext(FakeStoreContext);

export { FakeStoreProvider, useFakeStore };
