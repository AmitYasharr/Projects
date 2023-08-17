// import React, { Key } from 'react';
import Task from './Task';
import '../styles/TaskArea.css';
import { Key, useEffect } from 'react';

type taskType = {
    taskData?:String,
    taskDate?:String,
    taskStatus:Number
}

type propsType = {
    tasks:taskType[],
    changeTask:any;
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
                    changeTask={
                        props.changeTask
                    }
                >
                </Task>
            ))}
        </div>
    )
}

export default TaskArea;