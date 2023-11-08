import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';

const fetchDataFromFirebase = async () => {
  console.log('firebase foi chamado');
  try {
    const itemsCollection = collection(db, 'items');
    const snapshot = await getDocs(itemsCollection);
    const itemsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return itemsData;
  } catch (error) {
    console.error('Error fetching data from Firestore:', error);
    throw error;
  }
};

export { fetchDataFromFirebase };
