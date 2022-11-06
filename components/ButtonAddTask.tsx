import styles from "../styles/ButtonAddTask.module.css";

export default function ButtonAddTask() {
    return (
        <div className={styles['create-task-button-container']}>
            <button className={styles['create-task-button']}><span>&#43;</span></button>
            <span><i>12 Sep 1200</i></span>
        </div>
    )
}