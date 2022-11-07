import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { User } from "firebase/auth";
import { checkAuthState } from '../firebase/authentication';

import { getUserCollectionById } from '../firebase/db';
import { UserState, UserTMAppInt } from '../interfaces/userInterface';
import { UserTMApp } from '../entities/userTMApp';

const useUser = (): UserState => {

    const [user, setUser] = useState<UserTMAppInt>();

    const router = useRouter();

    useEffect(() => {
        checkAuthState(async (user: User) => {
            if (user) {

                const userTMApp = new UserTMApp();

                userTMApp.setAuth(user);

                const usersSnapshot = await getUserCollectionById(user.uid);

                if (usersSnapshot?.size === 1) {
                    usersSnapshot.forEach((u) => {
                        userTMApp.setUserData(u.data());
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