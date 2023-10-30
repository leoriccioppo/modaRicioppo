import { createContext, useState, useEffect, useContext } from 'react';
import { fetchData } from '../services/api.serviceFakeStore.js';
import { useLoading } from './loadingContext'; // Importe o hook useLoading

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
    const { showLoading, hideLoading } = useLoading(); // Use o contexto de loading

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            showLoading(); // Mostra o loading antes de fazer a requisição
            try {
                const response = await fetchData('/products');
                setProducts(response);
            } catch(error){
                console.error('Erro ao obter dados da API:', error);
            } finally {
                hideLoading(); // Esconde o loading após a requisição (seja sucesso ou erro)
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return (
        <ProductsContext.Provider 
            value={{ 
                products, 
                loading 
                }}>
            {children}
        </ProductsContext.Provider>
    );
};

const useProducts = () => useContext(ProductsContext);

export { ProductsProvider, useProducts };
