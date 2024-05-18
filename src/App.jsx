import './App.css'
import AddTasks from './components/AddTasks'
import { useState, useEffect } from 'react'
import ListTask from './components/ListTask'
import { DragDropContext } from 'react-beautiful-dnd'

function App() {
  const [tasks, setTasks] = useState([])
  // const [taskLists, setTaskLists] = useState([]);

  console.log('taskFrom app:', tasks)

  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem('tasks')))
  }, [])
  return (
    <DragDropContext>
      <AddTasks/>
      <ListTask/>
    </DragDropContext>
  )
}

export default App
