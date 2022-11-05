import Task from './task';
import { useState } from 'react';
import styles from "../../styles/task-styles.module.css"

function TaskCreator() {
    const [task, setTask] = useState('')
    const [taskList, setTaskList] = useState([])
    
    function InputCatch(e) {
        setTask(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        console.log(e)
        const taskTitle = form.get('task-title');
        setTaskList([taskTitle, ...taskList])
        setTask('')


    }
    return (
        <div>
            <form className='input-form' onSubmit={handleSubmit}>

                <input type="text" name="task-title" placeholder='Input task name' onChange={InputCatch} value={task} />
                <input type="submit" value="submit" />
            </form>
            <div className={styles.taskList}>
                <Task task={taskList} />
            </div>
        </div>
    )
}

export default TaskCreator;