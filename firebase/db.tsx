import { app } from './config';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const db = getFirestore(app);

export const addToCollection = async (collectionPath: string, item: any) => {
    try {
        const docRef = await addDoc(collection(db, collectionPath), item);
        console.log(docRef);
        
    } catch (err) {
        console.log(err);
        
    }
}