import { createSelector } from 'reselect';


const todoState = (state) => state.todo;

// eslint-disable-next-line max-len
const getAllTodoListsById = (id) => createSelector(todoState, (state) => state.lists.filter((todo) => todo._id === id));
const getAllTodosByListId = (id) => createSelector(todoState, (state) => {
  const selectedList = state.lists.find((list) => list._id === id);
  return selectedList.todos.map((todo) => todo);
});
const getAllActiveTodosByListId = (id) => createSelector(todoState, (state) => {
  const selectedList = state.lists.find((list) => list._id === id);
  return selectedList.todos.filter((todo) => todo.isActive);
});
const getAllCompleteTodosByListId = (id) => createSelector(todoState, (state) => {
  const selectedList = state.lists.find((list) => list._id === id);
  return selectedList.todos.filter((todo) => !todo.isActive);
});
const getListName = createSelector(todoState, (state) => state.listName);
const getTodoName = createSelector(todoState, (state) => state.todoName);
const getAllTodoLists = createSelector(todoState, (state) => state.lists);
const getIsLoading = createSelector(todoState, (state) => state.isLoading);

export const todoSelectors = {
  getAllTodoListsById,
  getAllTodosByListId,
  getListName,
  getTodoName,
  getAllActiveTodosByListId,
  getAllCompleteTodosByListId,
  getAllTodoLists,
  getIsLoading,
};
