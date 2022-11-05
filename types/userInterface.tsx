import { User } from "firebase/auth";
import { DocumentData } from "firebase/firestore";

export interface UserAuth {
    user: User | undefined,
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