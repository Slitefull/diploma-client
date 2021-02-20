import wretch from 'wretch';

const register = (data) => wretch('api/auth/register').post(data).json();
const login = (data) => wretch('api/auth/login').post(data).json();

export const authApi = {
  login,
  register,
};
