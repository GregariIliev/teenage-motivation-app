import { User } from "firebase/auth"

export type UserTMP = {
    user: User | undefined,
    authUser: {
        registerUserWhitEmailAndPassword(e: BaseSyntheticEvent): void,
        loginUserWhitEmailAndPassword(e: BaseSyntheticEvent): void,
        authUserWhitFacebook(e: BaseSyntheticEvent): void,
        userSingOut(): Promise<void>
    } | undefined,
    error: FirebaseError | undefined
}