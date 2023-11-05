import { createContext, useState, useEffect, useContext } from 'react';
import { useFakeStore } from './fakeStoreApiContext.jsx';
import { useFirebase } from '../firebase/firebaseContext.jsx';

const ProductsContext = createContext();

const ProductsProvider = ({children})=>{

    const { items: firebaseItems } = useFirebase();
    const { products: fakeStoreItems } = useFakeStore();

    const allItems = [...firebaseItems, ...fakeStoreItems];

    return (
        <ProductsContext.Provider 
        value={{
            allItems
            }}>

            {children}

            </ProductsContext.Provider>
    );

};

const useProducts =  ()=> useContext(ProductsContext);

export{ ProductsProvider, useProducts }