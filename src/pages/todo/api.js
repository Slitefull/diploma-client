import wretch from 'wretch';


const createNewList = (userId, list) => (
  wretch('api/todo/list')
    .post({ userId, list })
    .json()
);

const deleteListById = (userId, listId) => (
  wretch(`api/todo/list/userId=${userId}/listId=${listId}`)
    .delete()
    .json()
);

const getAllLists = (userId) => (
  wretch(`api/todo/list/userId=${userId}`)
    .get()
    .json()
);

const createTodo = (userId, listId, todo) => (
  wretch(`api/todo/newTodo/userId=${userId}/listId=${listId}`)
    .post({ todo })
    .json()
);

const changeTodoStatus = (userId, listId, todoId, isActive) => (
  wretch(`api/todo/todoStatus/userId=${userId}/listId=${listId}/todoId=${todoId}`)
    .put({ isActive })
    .json()
);

const deleteTodo = (userId, listId, todoId) => (
  wretch(`api/todo/deleteTodo/userId=${userId}/listId=${listId}/todoId=${todoId}`)
    .delete()
    .json()
);

export const todoApi = {
  createNewList,
  deleteListById,
  getAllLists,
  createTodo,
  changeTodoStatus,
  deleteTodo,
};
