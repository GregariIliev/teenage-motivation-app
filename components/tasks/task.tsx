
function Task(props) {
    let task = props.task;
    return (
        task.map((i) =>
            (<p>{i}</p>))
    )

}


export default Task;