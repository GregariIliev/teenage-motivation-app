import { User } from "firebase/auth";
import { DocumentData } from "firebase/firestore";


export interface UserState {
    user: UserTMAppInt | undefined;
}

export interface UserTMAppInt {
    userAuth: User | undefined;
    userData: DocumentData | undefined;
    setAuth(userAuth: User): void,
    setUserData(userData: DocumentData): void
}


export interface UserFirestoreCollection {
    userAuthId: string;
    fullName: string;
    familyId: string;
    requestMembers: string[];
    currentTasks: [];
    doneTasks: [];
    points: number;
}