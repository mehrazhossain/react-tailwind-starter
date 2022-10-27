import { createSlice } from '@reduxjs/toolkit';

export const greetSlice = createSlice({
  name: 'greet',
  initialState: { state: '' },
  reducers: {
    showGreetMessage: (state) => {
      state.message = 'Hello World!';
    },
    hideGreetMessage: (state) => {
      state.message = '';
    },
  },
});

export const { showGreetMessage, hideGreetMessage } = greetSlice.actions;

export default greetSlice.reducer;
