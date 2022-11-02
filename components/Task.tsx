import Image from "next/image"
import completeTask from "../public/complete-task.png";
import styles from "../styles/Task.module.css";

export default function Task() {

    const tasks = [{ name: 'Learn programming', type: 'task 2' }, { name: 'Learn programming', type: 'task 2' }]
    return <>{tasks.map((t) => (
        <div key={t.name} className={`card m-2 ${styles['task-card-container']}`}>
            <div className="card-body d-flex flex-column justify-content-center align-items-center p-3">
                <Image src={completeTask} alt={"Task status"} width={50} height={50} />
                <h5 className={styles['title']}>{t.name}</h5>
                <div className={styles['button-container']}>
                    <a href="#" className={styles['button-remove']}>remove</a>
                    <a href="#" className={styles['button-edit']}>edit</a>
                </div>
            </div>
        </div>
    ))}</>
}