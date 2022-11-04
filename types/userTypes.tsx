import { User } from "firebase/auth"

export type UserAuth = {
    user: User | undefined
}

export type UserCollection = {
    user: UserAuth,
    fullName: string,
    familyMembers: UserCollection[],
    requestMembers: string | undefined,
    currentTasks: [],
    doneTasks:[],
    points: number
}