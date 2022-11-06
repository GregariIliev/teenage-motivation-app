import Image from "next/image"
import completeTask from "../public/complete-task.png";
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
            <div className={styles['task-create']}>
                <button className={styles['create-task-button']}><span>&#43;</span></button>
                <span><i>12 Sep 1200</i></span>
            </div>
            <div className={styles['tasks-container']}>
                {tasks.map((t) => (
                    <div key={t.name} className={styles['task-card-container']}>
                        <div>
                            <Image src={completeTask} alt={"Task status"} width={50} height={50} />
                        </div>
                        <h5 className={styles['title']}>{t.name}</h5>
                        <div className={styles['button-container']}>
                            <a href="#" className={styles['button-remove']}>remove</a>
                            <a href="#" className={styles['button-edit']}>edit</a>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )

}