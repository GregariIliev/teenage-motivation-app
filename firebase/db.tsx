import { app } from './config';
import { getFirestore, collection, addDoc, query, getDocs, where } from 'firebase/firestore';
import { userTemplate } from './templates/user';
import { User } from 'firebase/auth';
import { USER_COLLECTION_NAME } from './templates/user';

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
        const q = query(collection(db, USER_COLLECTION_NAME), where("userAuthId", "==", id));

        return await getDocs(q);
    } catch (err) {
        console.log(err);
    }
}