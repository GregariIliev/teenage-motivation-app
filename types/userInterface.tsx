import { User } from "firebase/auth"

export interface UserAuth {
    user: User | undefined
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