import Task from './task';
import { useState } from 'react';

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
            <form  >

                <input type="text" name="title" placeholder='Input task name' onChange={inputCatch} value={task} />

                <button onClick={handleSubmit} >Save Task</button>
            </form>
            <Task task={taskList} />
        </div>
    )
}

export default TaskCreator;