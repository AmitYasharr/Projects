import NavBar from '../components/Navbar';
import AddTasksArea from '../components/AddTaksArea'
import TaskArea from '../components/TaskArea'
import '../styles/App.css';

function App() {

  return (
    <>
      <h1>Todo</h1>
      <AddTasksArea/>
      <NavBar/>
      <TaskArea/>
    </>
  )
}

export default App
