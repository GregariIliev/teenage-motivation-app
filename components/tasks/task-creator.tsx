import Task from './task';
import { useState,FormEvent , ChangeEvent} from 'react';
import styles from "../../styles/task-styles.module.css"
import ToDo from './types';


function TaskCreator() {
    const [taskName, setTaskName] = useState('');
    const [taskList, setTaskList] = useState<Array<ToDo>>([])
    const [taskDate,setTaskDate]=useState('')
    
    const handleSubmit=(submitEvent : FormEvent)=>{
        submitEvent.preventDefault();
        setTaskList([...taskList,{
            name : taskName,
            done: false,
            expirationDate: taskDate
        }])
        setTaskName('');
        setTaskDate('')
    }
    const handleChange=(changeEvent: ChangeEvent<HTMLInputElement>)=>{
        setTaskName(changeEvent.target.value)
    }
    const handleDate =(changeEvent: ChangeEvent<HTMLInputElement>)=>{
        setTaskDate(changeEvent.target.value)
    }


    return<div>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={taskName} placeholder="Enter name" />

            <input type="date" onChange={handleDate} value={taskDate}/>
            <input type="submit"  />
        </form>

            <div className={styles.taskList}>
                <Task tasks={taskList} />
            </div>
        </div>
    
}

export default TaskCreator;