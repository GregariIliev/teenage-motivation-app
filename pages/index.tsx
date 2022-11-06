import type { NextPage } from 'next';

import TodayTasks from '../components/TodayTasks';
import { UserContext } from '../context/userContext';
import { useContext } from 'react';
import Head from 'next/head';

const TodayTasksPage: NextPage = () => {

  const { user } = useContext(UserContext);

  return user ?
    <>
      <Head>
        <title>Today Tasks</title>
        <meta name="today tasks" content="Today taks" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TodayTasks />
    </>
    : null;
}

export default TodayTasksPage;
