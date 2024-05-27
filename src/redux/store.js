import { configureStore, combineReducers } from "@reduxjs/toolkit";
import taskReducer from "./tasks/taskSlice";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage' 

const rootReducer = combineReducers({
    tasks: taskReducer,
});

const persistConfig = {
    key: 'root',
    storage,
}

    const persistedReducer = persistReducer(persistConfig, rootReducer)

    const store = configureStore({
    reducer: persistedReducer,
});


const persistor = persistStore(store);

export { store, persistor };