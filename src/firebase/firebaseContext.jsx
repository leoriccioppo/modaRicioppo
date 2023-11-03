import React, { createContext, useContext, useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';
import { useLoading } from '../contexts/loadingContext';

const FirebaseContext = createContext();

const FirebaseProvider = ({ children }) => {
  const { showLoading, hideLoading } = useLoading();

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const fetchItems = async () => {
      showLoading(); // Mostra o loading antes de fazer a requisição
      try {
        const itemsCollection = collection(db, 'items');
        const snapshot = await getDocs(itemsCollection);
        const itemsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setItems(itemsData); // Atualiza o estado com os itens do Firestore
        console.log(itemsData)
      } catch (error) {
        console.error('Erro ao obter dados do Firestore:', error);
      } finally {
        hideLoading(); // Esconde o loading após a requisição (seja sucesso ou erro)
        setLoading(false);
      }
    };
    fetchItems(); // Chama a função para buscar itens do Firestore quando o componente é montado
  }, []);
  
  return (
    <FirebaseContext.Provider 
    value={{
       items,
       loading 
       }}>
      {children}
    </FirebaseContext.Provider>
  );
}

function useFirebase() {
  const context = useContext(FirebaseContext);
  if (!context) {
    throw new Error('useFirebase must be used within a FirebaseProvider');
  }
  return context;
}



export { FirebaseProvider, useFirebase };