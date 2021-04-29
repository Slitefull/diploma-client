import wretch from 'wretch';


const createNewList = (userId, list) => wretch('api/todo/list')
  .post({ userId, list })
  .json();

const getAllLists = (userId) => wretch(`api/todo/list/userId=${userId}`)
  .get()
  .json();

const createTodo = (userId, listId, todo) => wretch(`api/todo/list/newTodo/userId=${userId}/listId=${listId}`)
  .post(todo)
  .json();

export const todoApi = {
  createNewList,
  getAllLists,
  createTodo,
};
