import wretch from 'wretch'

export const registerAPI = {
  register: data => wretch.post(`auth/register`, data)
}