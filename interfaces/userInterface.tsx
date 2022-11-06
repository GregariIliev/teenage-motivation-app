import { User } from "firebase/auth";
import { DocumentData } from "firebase/firestore";

export interface UserState {
    user: {
        userAuth: User | undefined,
        userData: DocumentData | undefined
    },
    updateUserStateData(userData: DocumentData | undefined): void
}

export interface UserCollection {
    userAuthId: string,
    fullName: string,
    rol: string,
    family: {}
    requestMembers: string[],
    currentTasks: [],
    doneTasks: [],
    points: number
}