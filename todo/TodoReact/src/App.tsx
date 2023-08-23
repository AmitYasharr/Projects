import NavBar from '../components/Navbar';
import AddTasksArea from '../components/AddTaksArea'
import TaskArea from '../components/TaskArea'
import '../styles/App.css';
import { useEffect, useState } from 'react';

function App() {

  const [tasks,setTasks] = useState<{id:number,taskData:string,taskStatus:number}[]>([]);
  const [filterdTasks,setFilterdTasks] = useState(tasks);
  const [mode,setMode] = useState(0);

  useEffect(()=>{
    if(mode==0){setFilterdTasks(tasks);}
    if(mode==1){
      const oldTasks = [...tasks];
      const newTasks = oldTasks.filter((task)=>{return(task.taskStatus<1)});
      setFilterdTasks(newTasks);
    }
    if(mode==2){
      const oldTasks = [...tasks];
      const newTasks = oldTasks.filter((task)=>{return task.taskStatus>0});
      setFilterdTasks(newTasks);
    }
  },[mode])

  const changeTask = (taskID:number) =>{
    const updateTasks = [...filterdTasks];
    if(updateTasks[taskID].taskStatus == 1){updateTasks[taskID].taskStatus=0}
    else if(updateTasks[taskID].taskStatus == 0){updateTasks[taskID].taskStatus=1}
    setFilterdTasks(updateTasks);
  }

  const addTask = (data:string) => {
    const updateTasks = [...tasks];
    console.log(updateTasks);
    const taskId = (updateTasks.length==0? 0:updateTasks[updateTasks.length-1].id+1)
    updateTasks.push({id:taskId,taskData:data,taskStatus:0})
    setTasks(updateTasks);
    setFilterdTasks(updateTasks);
  }

  const changeMode = (aMode:number) =>{
    setMode(aMode);
  }
  
  return (
    <>
      <h1>Todo</h1>
      <AddTasksArea addTask={addTask}></AddTasksArea>
      <NavBar changeMode={changeMode}></NavBar>
      {tasks.length==0? <>No tasks yet...</>:<TaskArea tasks={filterdTasks} changeTask={changeTask}></TaskArea>}
    </>
  )
}

export default App
