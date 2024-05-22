import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { update_task } from '../redux/tasks/taskSlice';
import toast from 'react-hot-toast';

const EditModal = ({showEditModal, setShowEditModal, task}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');

    const dispatch = useDispatch()

    useEffect(() => {
        if(task) {
            setTitle(task.title);
            setDescription(task.description);
            setDueDate(task.dueDate);
        }
    }, [task])

    function handleSave (e) {
        e.preventDefault();
        const updatedTask = {...task, title, description, dueDate}
        dispatch(update_task(updatedTask))
        console.log('function is called...')
        setShowEditModal(false);
        toast.success('Task updated successfully!');
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center">
            <div className="relative p-4 w-full max-w-md max-h-full">
                {/* <!-- Modal content --> */}
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    {/* <!-- Modal header --> */}
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Edit Task 
                        </h3>
                        <button  onClick={() => setShowEditModal(false)} type="button" className="end-2.5 text-gray-400 font-semibold bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                            X
                        </button>
                    </div>
                    {/* <!-- Modal body --> */}
                    <div className="p-4 md:p-5">
                        <form className="space-y-4" onSubmit={handleSave}>
                            <div>
                                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                                <input 
                                    type="text" 
                                    name="title" 
                                    id="title" 
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                                    required 
                                />
                            </div>
                            <div>
                                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                <input 
                                    type="text" 
                                    name="description" 
                                    id="description" 
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white mb-4" required 
                                />
                            </div>
                            <div>
                                <label htmlFor="dueDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
                                <input 
                                    type="date" 
                                    name="dueDate" 
                                    id="dueDate" 
                                    value={dueDate}
                                    onChange={(e) => setDueDate(e.target.value)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white mb-4" 
                                />
                            </div>
                            <button type="submit" className="w-full text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                Update
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditModal
