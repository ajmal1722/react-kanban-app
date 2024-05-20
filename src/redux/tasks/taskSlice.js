import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        value: [{}]
    },
    reducers: {
        create_task: (state, action) => {
            state.value.push(action.payload)
        },
        remove_task: (state, action) => {
            const id = action.payload;
            state.value = state.value.filter(task => task.id !== id);
        },
        update_task_status: (state, action) => {
            const { id, status } = action.payload
            const task = state.value.find(task => task.id === id);
            if (task) {
                task.status = status
            }
        }
    }
})

export const { create_task, remove_task, update_task_status } = taskSlice.actions;
export default taskSlice.reducer