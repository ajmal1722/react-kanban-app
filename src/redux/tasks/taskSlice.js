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
        }
    }
})

export const { create_task, remove_task } = taskSlice.actions;
export default taskSlice.reducer