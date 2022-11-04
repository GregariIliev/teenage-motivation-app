import { BaseSyntheticEvent, useEffect, useState } from 'react';
import { User } from "firebase/auth";
import { registerWhitEmailAndPassword, loginInWithEmailAndPassword, facebookAuth, checkAuthState, userSingOut } from '../firebase/authentication';

import { useRouter } from 'next/router';
import { UserTMP } from '../types/userTypes';

const useUser = (): UserTMP => {

    const [user, setUser] = useState<User>();
    const [error, setError] = useState();

    const router = useRouter();

    useEffect(() => {
        checkAuthState((user: User) => {
            if (user) {
                setUser(user);
                setError(undefined);
            } else {
                setUser(undefined);
                router.replace('/login');
            }
        });
    }, [user])

    const registerUserWhitEmailAndPassword = (e: BaseSyntheticEvent) => {
        e.preventDefault();

        const form = new FormData(e.target.form);

        const email = form.get('email')?.toString();
        const password = form.get('password')?.toString();

        if (!email || !password) {
            console.log('Fields are empty!');
            return
        }

        registerWhitEmailAndPassword(email, password)
            .then(user => {
                if (user) {
                    router.push('/login');
                }
            }).catch(err => {
                setError(err);
            })


    }

    const loginUserWhitEmailAndPassword = (e: BaseSyntheticEvent) => {
        e.preventDefault();

        const form = new FormData(e.target.form);

        const email = form.get('email')?.toString();
        const password = form.get('password')?.toString();

        if (!email || !password) {
            console.log('Login failed!');
            return
        }

        loginInWithEmailAndPassword(email, password)
            .then(user => {
                if (user) {
                    router.push('/');
                }
            }).catch(err => {
                console.log(err);
                setError(error);
            })

    }

    const authUserWhitFacebook = (e: BaseSyntheticEvent) => {
        e.preventDefault();

        facebookAuth()
            .then((user) => {
                // The signed-in user info.
                if (user) {
                    router.push('/');
                }
                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                //const credential = FacebookAuthProvider.credentialFromResult(result);
                //const accessToken = credential.accessToken;

                // ...
            })
            .catch((error) => {
                // Handle Errors here.
                setError(error);
                //const errorCode = error.code;
                //const errorMessage = error.message;
                // The email of the user's account used.
                //const email = error.customData.email;
                // The AuthCredential type that was used.
                //const credential = FacebookAuthProvider.credentialFromError(error);

                // ...
            });
    }
    const authUser = {
        registerUserWhitEmailAndPassword,
        loginUserWhitEmailAndPassword,
        authUserWhitFacebook,
        userSingOut
    }
    return { user, authUser, error }
}

export default useUser;