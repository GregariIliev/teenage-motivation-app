import { useState, FormEvent, ChangeEvent } from 'react';
import ToDo from './types';

function TaskForm(props:{getTaskName:(change: string)=>void,getForm:(submitEvent: FormEvent)=>void}) {
    
 
    return (<form onSubmit={props.getForm}>
        <input type="text" onChange={(e)=>props.getTaskName(e.target.value)}  placeholder="Enter name" />
        <input type="submit" />
    </form>)
}

export default TaskForm