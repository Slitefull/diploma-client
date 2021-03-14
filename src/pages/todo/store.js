import { createSlice } from '@reduxjs/toolkit';


const storeName = 'todo';

const initialState = {
  todoList: [],
};

const todoSlice = createSlice({
  name: storeName,
  initialState,
  reducers: {
    createTodo(state, action) {
      state.todoList.push(action.payload);
    },
  },
});

export const todoActions = {
  createTodo: todoSlice.actions.createTodo,
};

export const todoReducer = todoSlice.reducer;
