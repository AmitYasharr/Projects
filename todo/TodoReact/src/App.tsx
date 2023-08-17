import NavBar from '../components/Navbar';
import AddTasksArea from '../components/AddTaksArea'
import TaskArea from '../components/TaskArea'
import '../styles/App.css';
import { useState } from 'react';

function App() {

  const [tasks,setTasks] = useState([{id:0,taskData:"Amit",taskStatus:0}]);
  const [mode,setMode] = useState(0);

  const changeTask = (taskID:number) =>{
    const updateTasks = [...tasks];
    if(updateTasks[taskID].taskStatus == 1){updateTasks[taskID].taskStatus=0}
    else if(updateTasks[taskID].taskStatus == 0){updateTasks[taskID].taskStatus=1}
    setTasks(updateTasks);
  }

  const addTask = (data:string) => {
    const updateTasks = [...tasks];
    updateTasks.push({id:updateTasks[updateTasks.length-1].id+1,taskData:data,taskStatus:0})
    setTasks(updateTasks);
  }

  const changeMode = (aMode:number) =>{
    setMode(aMode);
  }
  
  return (
    <>
      <h1>Todo</h1>
      <AddTasksArea addTask={addTask}></AddTasksArea>
      <NavBar/>
      <TaskArea tasks={tasks} changeTask={changeTask}></TaskArea>
    </>
  )
}

export default App
