import wretch from 'wretch'

export const loginAPI = {
  login: data => wretch.post('auth/login', data)
}

//TODO do something
//TODO do something