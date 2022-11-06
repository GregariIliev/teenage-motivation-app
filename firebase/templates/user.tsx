import { User } from "firebase/auth";
import { UserCollection } from "../../interfaces/userInterface";

export const userTemplate = (user: User, fullName: string) => {
    const userT: UserCollection = {
        userAuthId: user.uid,
        fullName: fullName,
        rol: "",
        family: {},
        requestMembers: [],
        currentTasks: [],
        doneTasks: [],
        points: 0
    }

    return userT;
}

export const USER_COLLECTION_NAME = "users";