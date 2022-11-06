import { NextPage } from "next";
import Head from "next/head";
import Register from "../components/Register";

const RegisterPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Login</title>
                <meta name="login" content="Login" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Register />
        </>
    )
}

export default RegisterPage;