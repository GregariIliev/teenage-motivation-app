import { createContext } from 'react';
import { UserTMApp } from '../interfaces/userInterface';

export const UserContext = createContext<UserTMApp | undefined>();