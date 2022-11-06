import { useEffect, useState } from 'react';
import { User } from "firebase/auth";
import { checkAuthState } from '../firebase/authentication';

import { useRouter } from 'next/router';
import { UserAuth } from '../types/userInterface';
import { DocumentData } from 'firebase/firestore';

const useUser = (): UserAuth => {

    const [user, setUser] = useState<User>();
    const [userData, setUserData] = useState<DocumentData>();

    const router = useRouter();
    
    useEffect(() => {
        checkAuthState((user: User) => {
            if (user) {
                setUser(user);
            } else {
                setUser(undefined);
                router.replace('/login');
            }
        });
    }, [user]);


    const updateUserStateData = (userData: DocumentData) => {
        setUserData(userData);
    }    

    return { user, updateUserStateData }
}

export default useUser;