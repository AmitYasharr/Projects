import React, { Key } from 'react';
import Task from './Task';
import '../styles/TaskArea.css';

const TaskArea = () =>{ 
    type taskType = {
        taskData?:String,
        taskDate?:String,
        taskStatus:Number
    }
    const tasks:taskType[] = [
        {taskData:"AMIT",taskStatus:0},
        {taskData:"sadas",taskStatus:1},
        {taskData:"AMsdfdsIT",taskStatus:0},
        {taskData:"AMsdfsdfdsfIT",taskStatus:1}
    ]

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