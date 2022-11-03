import { useState } from "react";
import Task from "./task";

import TaskCreator from "./task-creator";

function TaskList() {
    const [todos, setTodo] = useState([""]);

    function addToDo(todo) {
        // const newToDoList = [todo, ...todos];
        // setTodo(newToDoList)
        // console.log(todos)

    }


    return (
        <div>
            <TaskCreator />

        </div>
    )
}

export default TaskList;