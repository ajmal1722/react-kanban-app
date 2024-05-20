import { MdDelete, MdEdit } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { remove_task } from '../redux/tasks/taskSlice';
import toast, { Toaster } from 'react-hot-toast';
import { Draggable } from 'react-beautiful-dnd';
import EditModal from './EditModal';
import { useState } from 'react';

const TaskCard = ({ task, index }) => {
    const dispatch = useDispatch()

    const { id, title, description, dueDate } = task;

    const removeTask = (id) => {
        dispatch(remove_task(id))
        toast.success('Task removed succesfully!')
    }

    const [showEditModal, setShowEditModal] = useState()

    return (
        <Draggable draggableId={task.id} index={index}>
            {(provided) => (
                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}
                    className='text-2xl border rounded-lg p-4 m-2 bg-gray-50'>
                    <div className="flex justify-between mb-3">
                        <h1 className='text-lg font-semibold text-gray-700'>
                            { dueDate }
                        </h1>
                        <div className="flex gap-3 justify-end text-lg px-3">
                            <MdEdit onClick={() => setShowEditModal(true)} className='hover:text-green-700 cursor-pointer'/>
                            <MdDelete onClick={() => removeTask(id)} className='hover:text-red-700 cursor-pointer'/>
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
                    <Toaster />
                    { showEditModal &&<EditModal showEditModal={showEditModal} setShowEditModal={setShowEditModal} /> }
                </div>    
            )} 
        </Draggable>
        
    );
};

export default TaskCard
