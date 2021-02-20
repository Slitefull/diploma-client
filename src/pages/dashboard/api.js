import wretch from 'wretch';

const getAllUsers = () => wretch('api/user/users').get().json();
const makeAdmin = (userId) => wretch.post('api/user/makeAdmin').post({ userId });
const removeAdmin = (userId) => wretch('api/user/removeAdmin').delete({ data: { userId } });

export const dashboardApi = { getAllUsers, makeAdmin, removeAdmin };
