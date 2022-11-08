import Tasks from "./Tasks";

import styles from '../styles/TodayTasks.module.css';

export default function TodayTasks() {
    return (
        <div className={styles["today-tasks-container"]}>
            <Tasks />
        </div>
    )
}