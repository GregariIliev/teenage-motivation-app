import {
     getAuth, signInWithPopup, onAuthStateChanged,
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

export const checkAuthState = (callback: any) => {
     return onAuthStateChanged(auth, callback);
}

export const userSingOut = () => {
     return auth.signOut()
}