import wretch from 'wretch'

export const profileApi = {
  getAllUsers: () => wretch.get(`user/users`).json(),
  saveProfileSettings: data => wretch.put(`user/profile`, data),
  makeAdmin: userId => wretch.post(`user/makeAdmin`, { userId }),
  removeAdmin: userId => wretch.delete(`user/removeAdmin`, { data: { userId } })
}
