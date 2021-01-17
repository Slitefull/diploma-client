import wretch from 'wretch'


const saveProfileSettings = data => wretch(`api/user/profile`).put(data)

export const profileApi = { saveProfileSettings }