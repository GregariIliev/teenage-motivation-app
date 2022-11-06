import Head from 'next/head';
import styles from '../styles/Members.module.css';

export default function Members() {
    return (
        <>
            <Head>
                <title>Members</title>
                <meta name="members" content="Family members" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles["members-container"]}>
                asd
            </div>
        </>
    )
}