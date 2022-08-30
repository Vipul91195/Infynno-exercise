import { configureStore } from '@reduxjs/toolkit';
import autodiggReducer from '../slice/slice';
import { createWrapper } from 'next-redux-wrapper';

const makeStore = () => configureStore({
    reducer: {
        autodigg: autodiggReducer
    }
});

export const wrapper = createWrapper(makeStore);