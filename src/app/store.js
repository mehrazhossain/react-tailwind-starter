import { configureStore } from '@reduxjs/toolkit';
import greetReducer from '../features/greet/greetSlice';

const store = configureStore({
  reducer: {
    //   counter: counterReducer,
    greet: greetReducer,
  },
});

export default store;
