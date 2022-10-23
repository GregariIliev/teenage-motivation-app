import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';

import type { AppProps } from 'next/app';

import { UserContext } from '../context/userContext';
import useUser from '../hooks/useUser';
import Layout from '../components/Layout';

import { useEffect } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {

  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
   // user ? router.replace('/') : router.replace('/login');
  }, [])
  //[user]

  return (
    <UserContext.Provider value={{ user }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserContext.Provider>
  )
}

export default MyApp
