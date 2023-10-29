import React, { createContext, useContext, useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';

const FirebaseContext = createContext();

const FirebaseProvider = ({ children }) => {

  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const itemsCollection = collection(db, 'items');

      const snapshot = await getDocs(itemsCollection);
      const itemsData = snapshot.docs.map(doc => doc.data());
      setItems(itemsData); // Atualiza o estado com os itens do Firestore

    };

    fetchItems(); // Chama a função para buscar itens do Firestore quando o componente é montado
  }, []);
  return (
    <FirebaseContext.Provider 
    value={{
       items 
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