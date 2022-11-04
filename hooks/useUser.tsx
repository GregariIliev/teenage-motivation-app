import { useEffect, useState } from 'react';
import { User } from "firebase/auth";
import { checkAuthState } from '../firebase/authentication';

import { useRouter } from 'next/router';
import { UserAuth } from '../types/userInterface';

const useUser = (): UserAuth => {

    const [user, setUser] = useState<User>();

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
    }, [user])

    return { user }
}

export default useUser;