import { User } from "firebase/auth";
import { UserFirestoreCollection } from "../../interfaces/userInterface";

export const userTemplate = (user: User, fullName: string) => {
    
    const userT: UserFirestoreCollection = {
        userAuthId: user.uid,
        fullName: fullName,
        familyId: "",
        requestMembers: [],
        currentTasks: [],
        doneTasks: [],
        points: 0,
    }

    return userT;
}

export const USER_COLLECTION_NAME = "users";