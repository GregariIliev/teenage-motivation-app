import { User } from "firebase/auth"
import { Rol } from "../enums/userRol"

export interface UserAuth {
    user: User | undefined
}

interface Family {
    mother: UserCollection,
    father: UserCollection,
    children: UserCollection[]
}

export interface UserCollection {
    user: UserAuth,
    fullName: string,
    rol: Rol,
    family: Family
    requestMembers: string[] | undefined, //only whit requests
    currentTasks: [],
    doneTasks: [],
    points: number
}