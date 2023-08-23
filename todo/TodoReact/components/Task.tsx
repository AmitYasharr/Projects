// import React from "react";
import '../styles/Task.css';

type propsType = {
    taskID:string,
    taskData?:String,
    taskStatus:Number,
    changeTask:any,
    deleteTask:any,
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
                <svg className="delete-symbol" onClick={()=>props.deleteTask(props.taskID)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 7V18C6 19.1046 6.89543 20 8 20H16C17.1046 20 18 19.1046 18 18V7M6 7H5M6 7H8M18 7H19M18 7H16M10 11V16M14 11V16M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7M8 7H16" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>}
            </span>
        </div>
    )
}

export default Task;