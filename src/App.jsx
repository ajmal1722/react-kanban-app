import './App.css'
import TaskCard from './components/TaskCard'
import AddTasks from './components/AddTasks'
import { useState, useEffect } from 'react'
import ListTask from './components/ListTask'

function App() {
  const [tasks, setTasks] = useState([])

  console.log('taskFrom app:', tasks)

  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem('tasks')))
  }, [])
  return (
    <>
      <AddTasks/>
      <ListTask/>
    </>
  )
}

export default App
