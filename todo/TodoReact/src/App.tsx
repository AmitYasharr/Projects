import NavBar from '../components/Navbar';
import AddTasksArea from '../components/AddTaksArea'
import TaskArea from '../components/TaskArea'
import '../styles/App.css';
import { useEffect, useState } from 'react';

// type taskType = {
//   taskData?:String,
//   taskDate?:String,
//   taskStatus:Number
// }

function App() {

  const [tasks,setTasks] = useState([
    {id:0,taskData:"Amit",taskStatus:0},
    {id:1,taskData:"Hello",taskStatus:0},
    {id:2,taskData:"How",taskStatus:0},
    {id:3,taskData:"Are",taskStatus:0},
    {id:4,taskData:"You?",taskStatus:0},
  ]);

  useEffect(()=>{
    console.log(tasks);
  },[tasks]);
  
  const changeTask = (taskID:number) =>{
    const updateTasks = tasks.map((task)=>{
      if(task.id==taskID){return {...task, taskStatus:1}}
      return task;
    })
    setTasks(updateTasks);
  }
  
  return (
    <>
      <h1>Todo</h1>
      <AddTasksArea/>
      <NavBar/>
      <TaskArea tasks={tasks} changeTask={changeTask}></TaskArea>
    </>
  )
}

export default App
