import NavBar from '../components/Navbar';
import AddTasksArea from '../components/AddTaksArea'
import TaskArea from '../components/TaskArea'
import '../styles/App.css';

type taskType = {
  taskData?:String,
  taskDate?:String,
  taskStatus:Number
}

function App() {

  const tasks:taskType[] = [
    {taskData:"AMIT",taskStatus:0},
    {taskData:"sadas",taskStatus:1},
    {taskData:"AMsdfdsIT",taskStatus:0},
    {taskData:"AMsdfsdfdsfIT",taskStatus:1}
]

  return (
    <>
      <h1>Todo</h1>
      <AddTasksArea/>
      <NavBar/>
      <TaskArea tasks={tasks}></TaskArea>
    </>
  )
}

export default App
