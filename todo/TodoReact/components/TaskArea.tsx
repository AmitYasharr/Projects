import React, { Key } from 'react';
import Task from './Task';
import '../styles/TaskArea.css';

type taskType = {
    taskData?:String,
    taskDate?:String,
    taskStatus:Number
}

type propsType = {
    tasks:taskType[]
}

const TaskArea = (props:propsType) =>{ 
    const tasks:taskType[] = props.tasks;

    return(
        <div className='text-area'>
            {tasks.map((task:taskType,index:Key)=>(
                <Task 
                    taskID={index.toString()}
                    taskData={task.taskData}
                    taskStatus={task.taskStatus}
                    key={index}
                >
                </Task>
            ))}
        </div>
    )
}

export default TaskArea;