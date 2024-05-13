import './App.css'
import TaskCard from './components/TaskCard'
import AddTasks from './components/AddTasks'
import { useState, useEffect } from 'react'
import ListTask from './components/ListTask'

function App() {
  const [tasks, setTasks] = useState([])
  // const [taskLists, setTaskLists] = useState([]);

  console.log('taskFrom app:', tasks)

  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem('tasks')))
  }, [])
  return (
    <>
      <AddTasks tasks={tasks} setTasks={setTasks} />
      <ListTask tasks={tasks} setTasks={setTasks}/>
    </>
  )
}

export default App
