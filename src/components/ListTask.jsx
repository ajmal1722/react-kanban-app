import React from 'react'
import TaskCard from './TaskCard'

const ListTask = () => {
    const staus = ['Pending', 'Progress', 'Completed']

    return (
        <div className='flex lg:gap-16 md:gap-8 gap-6 justify-center flex-wrap py-8  px-6'>
            {staus.map((item, index) => {
                return (
                    <div className='border lg:max-w-96 sm:max-w-80 w-full'>
                        <h1 className='text-xl font-semibold text-white bg-gray-600 text-center p-4'>{item}</h1>
                        <TaskCard/>
                    </div>
                )
            })}
        </div>
    )
}

export default ListTask
