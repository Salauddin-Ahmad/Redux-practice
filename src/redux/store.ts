import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'


export const store = configureStore({
    reducer: {
        counter: counterReducer,
    }, // Define your reducers here
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;
