import { FormEvent, ChangeEvent } from 'react';

function TaskForm(props:{getTaskName:(change: ChangeEvent<HTMLInputElement>)=>void,getForm:(submitEvent: FormEvent)=>void,resetValue:string}) {
    
 
    return (<form onSubmit={props.getForm}>
        <input type="text" onChange={props.getTaskName} value={props.resetValue} placeholder="Enter name" />
        <input type="submit" />
    </form>)
}

export default TaskForm