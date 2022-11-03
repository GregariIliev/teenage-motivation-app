import Task from "./task";
import { useState } from 'react';




function TaskCreator() {
    const [task, setTask] = useState('')
    let listArr = [
    ];

    function inputCatch(event: any) {
        setTask(event.target.value)
    }
    function PrintTask() {
        listArr.push(document.getElementById("task-input").innerText)
        console.log(listArr)
    }

    return (
        <div>
            <p >
                {/* <label htmlFor="title"></label> */}
                <input type="text" id="task-input" name="title" placeholder='Input task name' onChange={inputCatch} />
                <button type="submit" onClick={PrintTask} >Save Task</button>
            </p>
            <p>
                {listArr}
            </p>
        </div>
    )
}
export default TaskCreator;