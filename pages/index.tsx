import type { NextPage } from 'next';

import TodayTasks from '../components/TodayTasks';
import { UserContext } from '../context/userContext';
import { useContext } from 'react';

const HomeImpl: NextPage = () => {

  const { user } = useContext(UserContext);

  return user ? <TodayTasks /> : null;
}

export default HomeImpl;
