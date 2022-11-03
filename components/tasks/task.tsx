import { useState } from 'react'

function Task(props) {
    let task = props.task;

    function StatusTask(e) {
        if (e.target.name === 'notDone') {
            e.target.style.color = 'green'
            e.target.name = "done"
        } else {
            e.target.style.color = "red"
            e.target.name = "notDone"
        }
    }
    function DeleteElement(element) {

    }

    return (
        task.map((i) =>
        (<div className={i}>
            <p >
                {i}
            </p >
            <button onClick={() => DeleteElement(i)} >delete</button>
            <button onClick={StatusTask} name='notDone'>done</button>

        </div >
        ))

    )

}


export default Task;