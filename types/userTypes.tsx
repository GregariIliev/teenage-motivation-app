import { FirebaseError } from "firebase/app"
import { User } from "firebase/auth"
import { BaseSyntheticEvent } from "react"

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