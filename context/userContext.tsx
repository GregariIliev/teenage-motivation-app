import { createContext } from 'react';
import { UserState } from '../interfaces/userInterface';

export const UserContext = createContext<UserState | undefined>(undefined);