import React from 'react'
import Task from './Task';


const Tasks = ( { tasks, onDelete, Ontoggle }) => {
    return (
        <>
         { tasks.map( (task) => (
             <Task key={task.id} task={task} onDelete={onDelete} Ontoggle={Ontoggle} />
         ))}
        </>
    )
}

export default Tasks