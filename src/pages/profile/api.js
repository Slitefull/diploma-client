import wretch from 'wretch'

const getAllUsers = () => wretch(`api/user/users`).get().res()
const saveProfileSettings = data => wretch(`api/user/profile`).put(data)
const makeAdmin = userId => wretch.post(`api/user/makeAdmin`).post({ userId })
const removeAdmin = userId => wretch(`api/user/removeAdmin`).delete({ data: { userId }})

export const profileApi = { getAllUsers, saveProfileSettings, makeAdmin, removeAdmin }
