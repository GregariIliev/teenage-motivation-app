import ToDo from "./types";

function Tasks(props: { tasks: ToDo[], deleteTask: (id: number) => void }) {

    // const deleteTask = () => {

    // }
    return (<div>
        {
            props.tasks.map((task, i) => (
                <div key={`${i}-${task.name}`}>
                    <h3>{task.name}</h3>
                    <br />
                    <h3>Should be done by: {task.expirationDate}</h3>
                    <button onClick={() => props.deleteTask(i)}>Delete</button>
                </div>
            ))
        }
    </div>)
}
export default Tasks;