import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { User } from "firebase/auth";
import { checkAuthState } from '../firebase/authentication';

import { getUserCollectionById } from '../firebase/db';
import { UserState, UserTMApp } from '../interfaces/userInterface';

const useUser = (): UserState => {

    const [user, setUser] = useState<UserTMApp>();

    const router = useRouter();

    useEffect(() => {
        checkAuthState(async (user: User) => {
            if (user) {

                const userTMApp: UserTMApp = {
                    userAuth: user,
                    userData: undefined
                }

                const usersSnapshot = await getUserCollectionById(user.uid);

                if (usersSnapshot?.size === 1) {
                    usersSnapshot.forEach((u) => {
                        userTMApp.userData = u.data();
                    })
                }

                setUser(userTMApp);
            } else {
                setUser(undefined);
                router.replace('/login');
            }
        });
    }, []);

    return { user }
}

export default useUser;