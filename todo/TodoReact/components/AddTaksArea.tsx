import React from 'react';
import '../styles/AddTaskArea.css'

const AddTaskArea = () =>{
    return(
        <span  className='add-text-area'>
            <input placeholder="Add task..."></input>
            <button>Add</button>
        </span>
    )
}

export default AddTaskArea;