import { createContext } from 'react';
import { UserAuth } from '../types/userInterface';

export const UserContext = createContext<UserAuth>({user: undefined});