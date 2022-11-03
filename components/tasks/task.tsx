import { useState } from 'react'
import TaskList from './task-list';


function Task(taskName: string) {
    return (
        <div>
            {taskName}
        </div>
    )
}


export default Task;