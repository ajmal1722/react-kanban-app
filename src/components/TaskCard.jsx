import { MdDelete, MdEdit } from 'react-icons/md'
import { useSelector } from 'react-redux'

const TaskCard = ({ task }) => {
    // const task = useSelector(state => state.tasks.value);

    const { title, description, dueDate } = task;

    return (
        <div className='text-2xl border rounded-lg p-4 m-2 bg-gray-50 cursor-pointer'>
            <div className="flex justify-between mb-3">
                <h1 className='text-lg font-semibold text-gray-700'>
                    { dueDate }
                </h1>
                <div className="flex gap-3 justify-end text-lg px-3">
                    <MdEdit className='hover:text-green-700'/>
                    <MdDelete className='hover:text-red-700'/>
                </div>
            </div>
            <div className="flex justify-between">
                <h1 className='font-semibold text-violet-800'>
                    { title }
                </h1>
            </div>
            <p className='text-base my-2'>
                { description }
            </p>
        </div>
    );
};

export default TaskCard
