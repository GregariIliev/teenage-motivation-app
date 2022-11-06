import Head from "next/head";
import Tasks from "./Tasks";

import styles from '../styles/TodayTasks.module.css';

export default function TodayTasks() {
    return (
        <>
            <Head>
                <title>Today Tasks</title>
                <meta name="today tasks" content="Today taks" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles["today-tasks-container"]}>
                <Tasks />
            </div>
        </>
    )
}