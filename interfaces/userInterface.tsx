import { User } from "firebase/auth";
import { DocumentData } from "firebase/firestore";

import { FamilyInt } from '../interfaces/familyInterface';

export interface UserState {
    user: UserTMAppInt | undefined;
}

export interface UserTMAppInt {
    userAuth: User | undefined;
    userData: DocumentData | undefined;
    setAuth(userAuth: User): void,
    setUserData(userData: DocumentData): void
}


export interface UserCollection {
    userAuthId: string;
    fullName: string;
    rol: string;
    family: FamilyInt;
    requestMembers: string[];
    currentTasks: [];
    doneTasks: [];
    points: number;
}