import { NextPage } from "next";
import Head from "next/head";
import Members from "../components/Members";

import '../styles/Members.module.css';

const MembersPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Members</title>
                <meta name="members" content="Family members" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Members />
        </>
    )
}

export default MembersPage;