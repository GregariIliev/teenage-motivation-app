import { createContext } from 'react';
import { UserAuth } from '../interfaces/userInterface';

export const UserContext = createContext<UserAuth>({user: undefined});