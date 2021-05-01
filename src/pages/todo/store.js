import { createAction, createSlice } from '@reduxjs/toolkit';


const storeName = 'todo';

const initialState = {
  listName: '',
  todoName: '',
  lists: [],
  isLoading: false,
};

const todoSlice = createSlice({
  name: storeName,
  initialState,
  reducers: {
    setListName(state, action) {
      state.listName = action.payload;
    },
    setTodoName(state, action) {
      state.todoName = action.payload;
    },
    setLists(state, action) {
      state.lists = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const todoActions = {
  setTodoName: todoSlice.actions.setTodoName,
  setListName: todoSlice.actions.setListName,
  setLists: todoSlice.actions.setLists,
  setIsLoading: todoSlice.actions.setIsLoading,
  createNewList: createAction(`${storeName}/createNewList`),
  deleteListById: createAction(`${storeName}/deleteListById`),
  createTodo: createAction(`${storeName}/createTodo`),
  deleteTodo: createAction(`${storeName}/deleteTodo`),
  changeTodoStatus: createAction(`${storeName}/changeTodoStatus`),
};

export const todoReducer = todoSlice.reducer;
