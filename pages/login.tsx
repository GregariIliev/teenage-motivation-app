import { NextPage } from "next";
import Head from "next/head";
import Login from "../components/Login";

const LoginPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Login</title>
                <meta name="login" content="Login" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Login />
        </>
    )
}

export default LoginPage;