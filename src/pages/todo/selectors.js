import { createSelector } from 'reselect';


const todoState = (state) => state.todo;

const getAllTodos = createSelector(todoState, (state) => state.todoList);

export const todoSelectors = {
  getAllTodos,
};
