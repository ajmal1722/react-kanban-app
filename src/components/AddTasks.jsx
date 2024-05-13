import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import toast, { Toaster } from 'react-hot-toast';
import { CiCirclePlus } from 'react-icons/ci';

const AddTasks = () => {
    const [showForm, setShowForm] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [taskLists, setTaskLists] = useState([]);

    const displayForm = () => {
        console.log('button clicked...')
        setShowForm(prev => !prev)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title.length <= 3) {
            return toast.error('Title must have 3 letters')
        }

        if (description.length <= 3) {
            return toast.error('description must have 3 letters')
        }

        const task = {
            id: uuidv4(),
            title,
            description,
            dueDate
        }

        setTaskLists((prev) => {
            const list = [...prev, task];

            localStorage.setItem('tasks', JSON.stringify(list))
            return list
        });
        console.log('task', taskLists)

        toast.success('Your task is created succesfully!')

        // Clear input fields
        setTitle('');
        setDescription('');
        setDueDate('');
    };


    return (
        <>
            <Toaster />
            <div className='flex justify-center pt-16 my-8 bg-red-600 px-6'>
                {showForm ?
                    <form onSubmit={handleSubmit} className="sm:flex md:flex-row md:items-center md:justify-between">
                        <input
                            type="text"
                            placeholder="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className='border border-gray-300 rounded-lg px-4 py-2 mb-2 md:mb-0 md:mr-2 w-full md:w-auto'
                        />
                        <input
                            type="text"
                            placeholder="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className='border border-gray-300 rounded-lg px-4 py-2 mb-2 md:mb-0 md:mr-2 w-full md:w-auto'
                        />
                        <input
                            type="date"
                            placeholder="Due Date"
                            value={dueDate}
                            onChange={(e) => setDueDate(e.target.value)}
                            className='border border-gray-300 rounded-lg px-4 py-2 mb-2 md:mb-0 md:mr-2 w-full md:w-auto'
                        />
                        <div className="flex justify-center">
                        <button type="submit" className='text-gray-200 font-semibold bg-green-600 px-6 py-2 rounded-lg  md:w-auto'>
                            Add Task
                        </button>
                        </div>
                    </form> :
                    <div onClick={displayForm} className='text-lg text-white bg-green-600 px-6 py-2 rounded-lg cursor-pointer flex gap-2'>
                        Create a new Task
                        <CiCirclePlus className='mt-1' />
                    </div>
                }
            </div>
        </>
    );
};

export default AddTasks;
