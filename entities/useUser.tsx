import { useEffect, useState } from 'react';
import { User } from "firebase/auth";
import { checkAuthState } from '../firebase/authentication';

import { useRouter } from 'next/router';
import { UserState } from '../interfaces/userInterface';
import { DocumentData } from 'firebase/firestore';
import { getUserCollectionById } from '../firebase/db';

const useUser = (): UserState => {

    const [userAuth, setUser] = useState<User>();
    const [userData, setUserData] = useState<DocumentData>();

    const router = useRouter();

    const user = { userAuth, userData }

    useEffect(() => {
        checkAuthState(async(user: User) => {
            if (user) {
                setUser(user);

                const usersSnapshot = await getUserCollectionById(user.uid);

                if (usersSnapshot) {
                    usersSnapshot.forEach((u) => {
                        setUserData(u.data());
                    })
                }
            } else {
                setUser(undefined);
                setUserData(undefined);
                router.replace('/login');
            }
        });
    }, [userAuth]);

    return { user }
}

export default useUser;