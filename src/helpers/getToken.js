import { localStorageDataName } from '../consts'

export const getToken = () => {
  const data = JSON.parse(localStorage.getItem(localStorageDataName))
  return data.token
}