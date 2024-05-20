import './App.css'
import AddTasks from './components/AddTasks'
import ListTask from './components/ListTask'
import { DragDropContext } from 'react-beautiful-dnd'

function App() {
  
  return (
    <DragDropContext>
      <AddTasks/>
      <ListTask/>
    </DragDropContext>
  )
}

export default App
