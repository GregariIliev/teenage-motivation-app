import Image from "next/image"
import completeTask from "../public/complete-task.png";
import styles from "../styles/TaskCard.module.css";

export default function TaskCard({ task }: any) {
    return (
        <div key={task.name} className={styles['task-card-container']}>
            <div>
                <Image src={completeTask} alt={"Task status"} width={50} height={50} />
            </div>
            <h5 className={styles['task-card-title']}>{task.name}</h5>
            <div className={styles['button-container']}>
                <a href="#" className={styles['button-remove']}>remove</a>
                <a href="#" className={styles['button-edit']}>edit</a>
            </div>
        </div>
    )
}