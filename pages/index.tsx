import type { NextPage } from 'next';

import Home from '../components/Home';
import { UserContext } from '../context/userContext';
import { useContext } from 'react';

const HomeImpl: NextPage = () => {

  const { user } = useContext(UserContext);

  return (
    <Home />
  )
}

export default HomeImpl;
