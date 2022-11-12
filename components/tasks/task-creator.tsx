import Tasks from './tasks';
import { useState, FormEvent, ChangeEvent } from 'react';
import styles from "../../styles/task-styles.module.css";
import ToDo from './types';
import TaskForm from './task-form';

function TaskCreator() {
    const [taskList, setTaskList] = useState<Array<ToDo>>([]);
    const [taskName, setTaskName] = useState<string>('');
    
    const getForm=(submitEvent: FormEvent)=>{
        submitEvent.preventDefault();
        
        setTaskList([...taskList, {
            name: taskName,
            done: false
        }]);

        setTaskName('')
    }


    const getTaskName = (change: ChangeEvent<HTMLInputElement>)=>{
        setTaskName(change.target.value)
    }

    const deleteTask = (id: number) => {
        taskList.splice(id, 1)
        setTaskList([...taskList])
    }
    return <div>
        <div className={styles.taskList}>
            <TaskForm getTaskName={getTaskName} getForm={getForm} resetValue={taskName} />
            <Tasks tasks={taskList} deleteTask={deleteTask} />
        </div>
    </div>

}

export default TaskCreator;