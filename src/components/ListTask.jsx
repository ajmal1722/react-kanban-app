import TaskCard from './TaskCard'
import { useSelector } from 'react-redux'
import { Droppable } from 'react-beautiful-dnd'

const ListTask = () => {
    const statuses = ['Pending', 'Progress', 'Completed']
    const tasks = useSelector(state => state.tasks.value);
    console.log('muhammed ajmal', tasks)

    return (
        <div className='flex lg:gap-16 md:gap-8 gap-6 justify-center flex-wrap py-8 px-6'>
            {statuses.map((status) => (
                <Droppable key={status} droppableId={status}>
                    {(provided) => ( 
                        <div 
                            ref={provided.innerRef} 
                            {...provided.droppableProps}
                            className='border lg:max-w-96 sm:max-w-80 w-full rounded-lg min-h-96'
                        >
                            <h1 className='text-xl font-semibold text-white bg-gray-600 text-center p-4 rounded-t-lg mb-6'>
                                {status}
                            </h1>
                            {tasks && 
                                tasks
                                    .filter(task => task.status === status)
                                    .map((task, index) => (
                                        <TaskCard key={task.id} task={task} index={index} /> 
                                    ))
                            }
                            {provided.placeholder} 
                             {/* This is a placeholder that will be used to show the space where the item will be dropped */}
                        </div>
                    )}
                </Droppable>
            ))}
        </div>
    )
}

export default ListTask