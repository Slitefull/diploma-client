import { createSelector } from 'reselect';


const todoState = (state) => state.todo;

const getAllTodos = createSelector(todoState, (state) => state.todoList);
// eslint-disable-next-line max-len
const getAllActiveTodos = createSelector(todoState, (state) => state.todoList.filter((todo) => todo.status === 'active'));
// eslint-disable-next-line max-len
const getAllCompleteTodos = createSelector(todoState, (state) => state.todoList.filter((todo) => todo.status === 'complete'));
const getIsExistTodo = createSelector(todoState, (state) => state.isExist);

export const todoSelectors = {
  getAllTodos,
  getAllActiveTodos,
  getAllCompleteTodos,
  getIsExistTodo,
};
