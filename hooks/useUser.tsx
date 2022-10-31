import { useEffect, useState } from 'react';
import { FacebookAuthProvider, User } from "firebase/auth";
import { facebookAuth, checkAuthState, userSingOut } from '../firebase/authentication';

import { useRouter } from 'next/router';

const useUser = () => {

    const [user, setUser] = useState<User>();
    const [error, setError] = useState();

    const router = useRouter();

    useEffect(() => {
        checkAuthState((userSinguedIn: User) => {
            if (userSinguedIn) {
                setUser(userSinguedIn);
                setError(undefined);
            } else {
                setUser(undefined);
                router.replace('/login');
            }
        });
    }, [user])

    const authUserWhitFacebook = (e: any) => {
        e.preventDefault();

        facebookAuth()
            .then((facebookUser) => {
                // The signed-in user info.

                setUser(facebookUser.user);
                router.replace('/');
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

    return { user, authUserWhitFacebook, userSingOut, error }
}

export default useUser;