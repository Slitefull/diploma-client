import { createSelector } from 'reselect';


const todoState = (state) => state.todo;

// eslint-disable-next-line max-len
const getAllTodoListsById = (id) => createSelector(todoState, (state) => state.todoLists.filter((todo) => todo._id === id));
const getAllTodosByListId = (id) => createSelector(todoState, (state) => {
  const selectedList = state.todoLists.find((list) => list._id === id);
  return selectedList.todos.map((todo) => todo);
});
const getAllActiveTodosByListId = (id) => createSelector(todoState, (state) => {
  const selectedList = state.todoLists.find((list) => list._id === id);
  return selectedList.todos.map((todo) => todo.status === 'active');
});
const getAllCompleteTodosByListId = (id) => createSelector(todoState, (state) => {
  const selectedList = state.todoLists.find((list) => list._id === id);
  return selectedList.todos.map((todo) => todo.status === 'complete');
});
const getListName = createSelector(todoState, (state) => state.listName);
const getTodoName = createSelector(todoState, (state) => state.todoName);
const getAllTodoLists = createSelector(todoState, (state) => state.todoLists);

export const todoSelectors = {
  getAllTodoListsById,
  getAllTodosByListId,
  getListName,
  getTodoName,
  getAllActiveTodosByListId,
  getAllCompleteTodosByListId,
  getAllTodoLists,
};
