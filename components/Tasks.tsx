import TaskCard from "./TaskCard";
import ButtonAddTask from "./ButtonAddTask";
import styles from "../styles/Tasks.module.css";

export default function Tasks() {

    const tasks = [
        { name: 'Learn programming', type: 'task 2' },
        { name: 'Learn programming1', type: 'task 2' },
        { name: 'Learn programming2', type: 'task 2' },
        { name: 'Learn programming3', type: 'task 2' },
        { name: 'Learn programming4', type: 'task 2' },
        { name: 'Learn programming5', type: 'task 2' },
        { name: 'Learn programming6', type: 'task 2' }
    ]

    return (
        <>
            <ButtonAddTask />
            <div className={styles['tasks-container']}>
                {tasks.map(t => <TaskCard key={t.name} task={t} />)}
            </div>
        </>
    )

}