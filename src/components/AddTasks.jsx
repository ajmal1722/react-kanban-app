import { useState } from 'react';

const AddTasks = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [taskLists, setTaskLists] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const task = {
            title,
            description,
            dueDate
        }
        setTaskLists([...taskLists, task]);
        console.log('task', taskLists)

        // Clear input fields
        setTitle('');
        setDescription('');
        setDueDate('');
    };

    return (
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
    );
};

export default AddTasks;
