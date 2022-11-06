import { User } from "firebase/auth";
import { DocumentData } from "firebase/firestore";

    user: User | undefined,
export interface UserState {
    updateUserStateData(userData: DocumentData): void

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