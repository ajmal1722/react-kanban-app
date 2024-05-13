import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./tasks/taskSlice";

export default configureStore({
    reducer: {
        tasks: taskReducer
    }
})