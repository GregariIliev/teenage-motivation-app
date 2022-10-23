import {
     getAuth, signInWithPopup,
     FacebookAuthProvider, createUserWithEmailAndPassword
} from "firebase/auth";
import { app } from './config';

const auth = getAuth(app);
const provider = new FacebookAuthProvider();

export const facebookAuth = async () => {
     return signInWithPopup(auth, provider);
}

export const registerWhitEmailAndPassword = (email: string, password: string) => {
     return createUserWithEmailAndPassword(auth, email, password)
}