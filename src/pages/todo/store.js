import { createSlice } from '@reduxjs/toolkit';


const storeName = 'todo';

const initialState = {
  listName: '',
  todoName: '',
  todoLists: [],
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
      state.todoLists = action.payload;
    },
    createNewList(state, action) {
      state.todoLists.push(action.payload);
    },
    createTodo(state, action) {
      const { id, todoName, status } = action.payload;
      const selectedList = state.todoLists.find((todo) => todo._id === id);
      selectedList.todos.push({ todoName, status });
    },
    completeTodo(state, action) {
      const todo = state.todoLists.find((item) => item.todo === action.payload);
      todo.status = 'complete';
    },
  },
});

export const todoActions = {
  setTodoName: todoSlice.actions.setTodoName,
  setListName: todoSlice.actions.setListName,
  setLists: todoSlice.actions.setLists,
  createNewList: todoSlice.actions.createNewList,
  createTodo: todoSlice.actions.createTodo,
  completeTodo: todoSlice.actions.completeTodo,
};

export const todoReducer = todoSlice.reducer;
