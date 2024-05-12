import React from 'react'
import TaskCard from './TaskCard'

const ListTask = () => {
    const staus = ['Pending', 'Progress', 'Completed']
    return (
        <div className='flex gap-6 py-8 lg:px-32 md:px-16 px-6'>
            {staus.map((item, index) => {
                return (
                    <div className='border '>
                        <h1 className='text-xl font-semibold text-white bg-gray-600'>{item}</h1>
                        <TaskCard/>
                    </div>
                )
            })}
        </div>
    )
}

export default ListTask
