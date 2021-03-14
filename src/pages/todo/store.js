import { createSlice } from '@reduxjs/toolkit';


const storeName = 'todo';

const initialState = {
  todoList: [],
  isExist: false,
};

const todoSlice = createSlice({
  name: storeName,
  initialState,
  reducers: {
    createTodo(state, action) {
      const isExist = state.todoList.find((item) => item.todo === action.payload.todo);
      isExist ? state.isExist = true : state.todoList.push(action.payload);
    },
    completeTodo(state, action) {
      const todo = state.todoList.find((item) => item.todo === action.payload);
      todo.status = 'complete';
    },
  },
});

export const todoActions = {
  createTodo: todoSlice.actions.createTodo,
  completeTodo: todoSlice.actions.completeTodo,
};

export const todoReducer = todoSlice.reducer;
