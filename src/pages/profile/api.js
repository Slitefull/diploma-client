import wretch from 'wretch'

const getAllUsers = () => wretch.get(`user/users`).json()
const saveProfileSettings = data => wretch.put(`user/profile`, data)
const makeAdmin = userId => wretch.post(`user/makeAdmin`, { userId })
const removeAdmin = userId => wretch.delete(`user/removeAdmin`, { data: { userId } })

export const profileApi = { getAllUsers, saveProfileSettings, makeAdmin, removeAdmin }
