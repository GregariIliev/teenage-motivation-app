import ToDo from "./types";

function Task( props: {tasks:ToDo[]}){
    return(<div>
            {
                props.tasks.map((task)=>(
                    <div>
                        <h3>{task.name}</h3>
                        <br/>
                        <h3>Should be done by: {task.expirationDate}</h3>
                    </div>
                ))
            }
        </div>)
}
export default Task;