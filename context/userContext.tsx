import { createContext } from 'react';
import { UserTMP } from '../types/userTypes';

export const UserContext = createContext<UserTMP>({user: undefined, authUser: undefined, error: undefined});