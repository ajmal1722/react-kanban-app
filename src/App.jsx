import { useDispatch } from 'react-redux'
import './App.css'
import AddTasks from './components/AddTasks'
import ListTask from './components/ListTask'
import { DragDropContext } from 'react-beautiful-dnd'
import { useSelector } from 'react-redux'
import { update_task_status } from './redux/tasks/taskSlice'

function App() {


  const dispatch = useDispatch()
  const tasks = useSelector(state => state.tasks.value)

  function onDragEnd(result) {
    const { destination, source, draggableId } = result;
    if (!destination) return

    console.log('result:', result)

    const task = tasks.find(task => task.id === draggableId)
    if (task) {
      dispatch(update_task_status({ id: task.id, status: destination.droppableId }))
    }
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <AddTasks />
      <ListTask />
    </DragDropContext>
  )
}

export default App
