import React from "react";
import '../styles/Task.css';

type propsType = {
    taskID:String,
    taskData?:String,
    taskStatus:Number,
    children:any,
}

const Task = (props:propsType) =>{
    return(
        <div className="task">
            <h3>{props.taskID}</h3>
            <span>
                <h4>{props.taskData}</h4>
                <h5 className={`task-status ${props.taskStatus? 'done':'todo'}`}></h5>
            </span>
        </div>
    )
}

export default Task;