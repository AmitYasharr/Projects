// import React from "react";
import '../styles/Task.css';

type propsType = {
    taskID:string,
    taskData?:String,
    taskStatus:Number,
    changeTask:any,
    children:any,
}


const Task = (props:propsType) =>{
    return(
        <div className="task">
            <h3>{parseInt(props.taskID)+1}</h3>
            <span>
                <h4 className={`task-title${props.taskStatus==1?" done":""}`}>{props.taskData}</h4>
                {props.taskStatus==0? 
                <svg className="done-symbol" fill="#000000" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="1.078" onClick={()=>{props.changeTask(parseInt(props.taskID))}}><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.588"></g><g id="SVGRepo_iconCarrier"> <path d="M12 3.665L5.564 11 2 7.467l.718-.717 2.794 2.77L11.233 3l.767.665z"></path> </g></svg>
                :
                <></>}
            </span>
        </div>
    )
}

export default Task;