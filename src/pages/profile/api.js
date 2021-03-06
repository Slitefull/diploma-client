import wretch from 'wretch';


const saveProfileSettings = (data) => wretch('api/user/profile').put(data).json();

export const profileApi = { saveProfileSettings };
