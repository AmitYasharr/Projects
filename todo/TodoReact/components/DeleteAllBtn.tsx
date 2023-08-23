import '../styles/DeleteAllBtn.css';

type propsType={
    deleteAllTasks:any;
}

const DeleteAllBtn = (props:propsType) =>{
    return(
        <button className='delete-all-btn' onClick={()=>{props.deleteAllTasks()}}>
            Delete all
        </button>
    )
}

export default DeleteAllBtn;