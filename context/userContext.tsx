import { createContext } from 'react';
import { UserTMAppInt } from '../interfaces/userInterface';

export const UserContext = createContext<UserTMAppInt | undefined>(undefined);