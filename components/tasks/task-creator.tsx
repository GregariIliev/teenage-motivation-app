import Task from './task';
import { useState } from 'react';
import styles from "../../styles/task-styles.module.css"
function TaskCreator() {
    const [task, setTask] = useState('');
    const [taskList, setTaskList] = useState([])
    const inputCatch = (e) => {
        setTask(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setTaskList([task, ...taskList])
        setTask('')

    }
    return (
        <div>
            <form className='input-form'>

                <input type="text" name="title" placeholder='Input task name' onChange={inputCatch} value={task} />

                <button onClick={handleSubmit} className="submit-button">Save Task</button>
            </form>
            <div className={styles.taskList}>
                <Task task={taskList} />
            </div>
        </div>
    )
}

export default TaskCreator;