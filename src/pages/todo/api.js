import wretch from 'wretch';


const createTodo = (userId, todo) => wretch('api/todo/todo').post({ userId, todo }).json();

export const todoApi = {
  createTodo,
};
