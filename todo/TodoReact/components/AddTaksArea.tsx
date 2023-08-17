import React from 'react';
import { useRef } from 'react';
import '../styles/AddTaskArea.css';

type propsType ={
    addTask:any
}

const AddTaskArea = (props:propsType) =>{
    let taskInput = useRef<HTMLInputElement>(null);

    const addBtnFunc = () =>{
        if(taskInput.current!.value != ""){
            props.addTask(taskInput.current?.value);
            taskInput.current!.value = "";
        }
    }

    return(
        <span  className='add-text-area'>
            <input placeholder="Add task..." ref={taskInput} onKeyUp={(key)=>{
                if(key.code == 'Enter'){addBtnFunc()}
            }}></input>
            <button onClick={addBtnFunc}>Add</button>
        </span>
    )
}

export default AddTaskArea;