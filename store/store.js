import { configureStore } from '@reduxjs/toolkit';
import autodiggReducer from '../slice/slice';


const store = configureStore({
    reducer: {
        autodigg: autodiggReducer
    }
});

export default store;