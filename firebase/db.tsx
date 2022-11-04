import { app } from './config';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { userTemplate } from './templates/user';
import { User } from 'firebase/auth';

const db = getFirestore(app);

export const addToCollection = async (collectionPath: string, user: User, fullName: string) => {
    try {
        const userT = userTemplate(user, fullName);

        return await addDoc(collection(db, collectionPath), userT);
    } catch (err) {
        console.log(err);
        
    }
}