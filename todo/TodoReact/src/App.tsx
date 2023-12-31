"use client";

import NavBar from '../components/Navbar';
import AddTasksArea from '../components/AddTaksArea';
import TaskArea from '../components/TaskArea';
import DeleteAllBtn from '../components/DeleteAllBtn';

import '../styles/App.css';

import { useEffect, useState } from 'react';

function App() {

  const [tasks,setTasks] = useState<{id:number,taskData:string,taskStatus:number}[]>([]);
  const [filterdTasks,setFilterdTasks] = useState(tasks);
  const [mode,setMode] = useState(0);
  
  useEffect(()=>{
    setTasksFromStorage();
  },[])

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

  useEffect(()=>{
    mode==0? setFilterdTasks(tasks):{};
    updateLoaclStorage();
  },[tasks,filterdTasks])

  const changeTask = (taskID:number) =>{
    const updateTasks = [...filterdTasks];
    if(updateTasks[taskID].taskStatus == 1){updateTasks[taskID].taskStatus=0}
    else if(updateTasks[taskID].taskStatus == 0){updateTasks[taskID].taskStatus=1}
    setFilterdTasks(updateTasks);
  }

  const addTask = (data:string) => {
    const updateTasks = [...tasks];
    const taskId = (updateTasks.length==0? 0:updateTasks[updateTasks.length-1].id+1)
    updateTasks.push({id:taskId,taskData:data,taskStatus:0})
    setTasks(updateTasks);
    setFilterdTasks(updateTasks);
  }

  const changeMode = (aMode:number) =>{
    setMode(aMode);
  }

  const deleteTask = (taskID:number) =>{
    const updateTasks = [...tasks];
    updateTasks.splice(taskID,1);
    setFilterdTasks(updateTasks);
    setTasks(updateTasks);
  }

  const setTasksFromStorage = () =>{
    const tasksFromStorage = localStorage.getItem("theTasks");
    if(tasksFromStorage != null && tasksFromStorage !== ""){
      let tasksAgain:{id:number,taskData:string,taskStatus:number}[]|null = [];
      tasksFromStorage.split("|").map((task)=>{
        tasksAgain?.push((JSON.parse(task)))
      });
      setTasks(tasksAgain);
      setFilterdTasks(tasksAgain);
    } 
  }

  const updateLoaclStorage = ()=>{
    const tasksInString = tasks.map((task)=>{
      return(JSON.stringify(task));
    })
    localStorage.setItem("theTasks",tasksInString.join("|"));
  }

  const deleteAllTasks = () =>{
    const oldTasks = [...tasks];
    const newTasks = oldTasks.filter((task)=>{return(task.taskStatus<1)});
    setFilterdTasks([])
    setTasks(newTasks);
  }
  
  return (
    <div className='App'>
      <h1>Todo</h1>
      <AddTasksArea addTask={addTask}></AddTasksArea>
      <NavBar changeMode={changeMode}></NavBar>
      {filterdTasks.length==0? <h4 style={{color:"#aaa", fontWeight:400, padding:"20px",transition:"0.1s ease-in-out"}}>No tasks yet...</h4>:<TaskArea tasks={filterdTasks} changeTask={changeTask} deleteTask={deleteTask}></TaskArea>}
      {mode==2 && filterdTasks.length!=0? <DeleteAllBtn deleteAllTasks={deleteAllTasks}></DeleteAllBtn> :<></>}
    </div>
  )
}

export default App
