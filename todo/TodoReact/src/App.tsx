import NavBar from '../components/Navbar';
import AddTasksArea from '../components/AddTaksArea'
import TaskArea from '../components/TaskArea'
import '../styles/App.css';
import { useEffect, useState } from 'react';

function App() {

  const [tasks,setTasks] = useState([{id:0,taskData:"Amit",taskStatus:0}]);
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
    updateTasks.push({id:updateTasks[updateTasks.length-1].id+1,taskData:data,taskStatus:0})
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
      <TaskArea tasks={filterdTasks} changeTask={changeTask}></TaskArea>
    </>
  )
}

export default App
