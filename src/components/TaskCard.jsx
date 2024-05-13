import React from 'react'

const TaskCard = ({ task }) => {
    const title = task.title
    const description = task.description
    const date = task.dueDate

    return (
        <div className='text-2xl border rounded-lg p-2 m-2 bg-gray-50 cursor-pointer'>
            <div className="flex justify-between">
                <h1 className='font-semibold text-gray-700'>
                    { title }
                </h1>
                <h1 className='font-semibold text-gray-700 mx-2'>
                    { date }
                </h1>
            </div>
            <p className='text-base my-2'>
                { description }
            </p>
        </div>
    )
}

export default TaskCard
