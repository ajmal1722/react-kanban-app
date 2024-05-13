import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        value: [{}]
    },
    reducers: {
        create_task: (state, action) => {
            state.value.push(action.payload)
        }
    }
})

export const { create_task } = taskSlice.actions;
export default taskSlice.reducer