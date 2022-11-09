import { app } from './config';
import { User } from 'firebase/auth';
import { getFirestore, collection, addDoc, doc, getDoc } from 'firebase/firestore';
import { userTemplate, USER_COLLECTION_NAME } from './templates/user';

const db = getFirestore(app);

export const addToCollection = async (collectionPath: string, user: User, fullName: string) => {
    try {
        const userT = userTemplate(user, fullName);
        
        return await addDoc(collection(db, collectionPath), userT);
    } catch (err) {
        console.log(err);
    }
}

export const getUserCollectionById = async (id: string) => {
    try {
        const q = doc(db, USER_COLLECTION_NAME, id);

        return await getDoc(q);
    } catch (err) {
        console.log(err);
    }
}