import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import toast, { Toaster } from 'react-hot-toast';

const AddTasks = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [taskLists, setTaskLists] = useState([]);

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
            <Toaster/>
            <div className='flex justify-center pt-8'>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className='border border-gray-300 rounded-lg px-4 py-2 mb-2 mr-2'
                    />
                    <input
                        type="text"
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className='border border-gray-300 rounded-lg px-4 py-2 mb-2 mr-2'
                    />
                    <input
                        type="date"
                        placeholder="Due Date"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                        className='border border-gray-300 rounded-lg px-4 py-2 mb-2 mr-2'
                    />
                    <button type="submit" className='text-gray-200 font-semibold bg-green-600 px-6 py-2 rounded-lg'>
                        Add Task
                    </button>
                </form>
            </div>
        </>
    );
};

export default AddTasks;
