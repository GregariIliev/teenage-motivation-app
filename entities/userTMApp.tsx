import { User } from "firebase/auth";
import { DocumentData } from "firebase/firestore";
import { UserTMAppInt } from "../interfaces/userInterface";

export class UserTMApp implements UserTMAppInt {

    userAuth: User | undefined;
    userData: DocumentData | undefined;
    setAuth(userAuth: User): void {
        this.userAuth = userAuth
    }
    setUserData(userData: DocumentData): void {
        this.userData = userData
    }
}