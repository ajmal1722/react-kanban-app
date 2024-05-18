import TaskCard from './TaskCard'
import { useSelector } from 'react-redux'
import { Droppable } from 'react-beautiful-dnd'
import { v4 as uuidv4 } from 'uuid';

const ListTask = () => {
    const statuses = ['Pending', 'Progress', 'Completed']
    const tasks = useSelector(state => state.tasks.value);
    console.log('muhammed ajmal', tasks)

    return (
        <div className='flex lg:gap-16 md:gap-8 gap-6 justify-center flex-wrap py-8  px-6'>
            {statuses.map((item, index) => {
                return (
                    <Droppable key={item} droppableId={item}>
                        {(provided) => (
                            <div ref={provided.innerRef} {...provided.droppableProps}
                                className='border lg:max-w-96 sm:max-w-80 w-full rounded-lg min-h-96'>
                                <h1 className='text-xl font-semibold text-white bg-gray-600 text-center p-4 rounded-t-lg mb-6'>
                                    {item}
                                </h1>
                                {tasks &&
                                    tasks.filter(task => task.status === item)
                                        .map(task => (
                                            <TaskCard key={task.id} task={task} index={index}/>
                                        ))
                                }
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                )
            })}
        </div>
    )
}

export default ListTask
