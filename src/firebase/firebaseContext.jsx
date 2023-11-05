import React, { createContext, useContext, useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';

const FirebaseContext = createContext();

const FirebaseProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const itemsCollection = collection(db, 'items');
        const snapshot = await getDocs(itemsCollection);
        const itemsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setItems(itemsData); // Updates the state with items from Firestore
        console.log(itemsData);
      } catch (error) {
        console.error('Error fetching data from Firestore:', error);
      }
    };
    fetchItems(); // Calls the function to fetch items from Firestore when the component is mounted
  }, []);
  
  return (
    <FirebaseContext.Provider 
      value={{
        items
      }}
    >
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
