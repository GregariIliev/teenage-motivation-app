import Task from './tasks';
import { useState, FormEvent, ChangeEvent } from 'react';
import styles from "../../styles/task-styles.module.css"
import ToDo from './types';


function TaskCreator() {
    const [taskName, setTaskName] = useState('');
    const [taskList, setTaskList] = useState<Array<ToDo>>([])
    const [taskDate, setTaskDate] = useState('')

    const handleSubmit = (submitEvent: FormEvent) => {
        submitEvent.preventDefault();
        setTaskList([...taskList, {
            name: taskName,
            done: false,
            expirationDate: taskDate

        }])
        setTaskName('');
        setTaskDate('')
    }
    const handleChange = (changeEvent: ChangeEvent<HTMLInputElement>) => {
        setTaskName(changeEvent.target.value)
    }
    const handleDate = (changeEvent: ChangeEvent<HTMLInputElement>) => {
        setTaskDate(changeEvent.target.value)
    }

    const deleteTask = (id: number) => {
        taskList.splice(id, 1)
        setTaskList([...taskList])
    }
    return <div>


        <div className={styles.taskList}>
            <Task tasks={taskList} deleteTask={deleteTask} />
        </div>
    </div>

}

export default TaskCreator;