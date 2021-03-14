import { createSlice } from '@reduxjs/toolkit';


const storeName = 'todo';

const initialState = {
  todoLists: [],
  isExist: false,
};

const todoSlice = createSlice({
  name: storeName,
  initialState,
  reducers: {
    setLists(state, action) {
      state.todoLists = action.payload;
    },
    createNewList(state, action) {
      state.todoLists.push(action.payload);
    },
    createTodo(state, action) {
      const isExist = state.todoLists.find((item) => item.todo === action.payload.todo);
      isExist ? state.isExist = true : state.todoLists.push(action.payload);
    },
    completeTodo(state, action) {
      const todo = state.todoLists.find((item) => item.todo === action.payload);
      todo.status = 'complete';
    },
  },
});

export const todoActions = {
  setLists: todoSlice.actions.setLists,
  createNewList: todoSlice.actions.createNewList,
  createTodo: todoSlice.actions.createTodo,
  completeTodo: todoSlice.actions.completeTodo,
};

export const todoReducer = todoSlice.reducer;
