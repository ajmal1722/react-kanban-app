import './App.css'
import TaskCard from './components/TaskCard'
import AddTasks from './components/AddTasks'
import { useState, useEffect } from 'react'

function App() {
  const [tasks, setTasks] = useState([])

  console.log('taskFrom app:', tasks)

  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem('tasks')))
  }, [])
  return (
    <>
      <AddTasks/>
      <TaskCard/>
    </>
  )
}

export default App
