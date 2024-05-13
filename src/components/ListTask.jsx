import React from 'react'
import TaskCard from './TaskCard'

const ListTask = ({ tasks, setTasks }) => {
    const statuses = ['Pending', 'Progress', 'Completed']
    console.log('muhammed ajmal', tasks)

    return (
        <div className='flex lg:gap-16 md:gap-8 gap-6 justify-center flex-wrap py-8  px-6'>
            {statuses.map((item, index) => {
                return (
                    <div key={index} className='border lg:max-w-96 sm:max-w-80 w-full rounded-lg'>
                        <h1 className='text-xl font-semibold text-white bg-gray-600 text-center p-4 rounded-t-lg mb-6'>
                            {item}
                        </h1>
                        { tasks && 
                            tasks.filter(task => task.status === item)
                            .map(task => (
                                <TaskCard key={task.id} task={task}/>
                            ))
                            
                        }
                    </div>
                )
            })}
        </div>
    )
}

export default ListTask
