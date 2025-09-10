import { configureStore } from "@reduxjs/toolkit";
import myReducer from './CounterSlice';

export const MyStore = configureStore({
    reducer: {
        counter: myReducer
    }
});
