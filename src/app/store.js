import { configureStore } from '@reduxjs/toolkit';
import greetReducer from '../features/greet/greetSlice';
import todosReducer from '../features/todos/todosSlice';

const store = configureStore({
  reducer: {
    //   counter: counterReducer,
    greet: greetReducer,
    todos: todosReducer,
  },
});

export default store;
