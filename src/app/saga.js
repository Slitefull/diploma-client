import { put, takeLatest } from 'redux-saga/effects'
import { appActions } from './store'
import jwt_decode from 'jwt-decode'
import { localStorageDataName } from '../consts'
import { userRoles } from '../helpers/getRole'
import { profileApi } from '../pages/profile/api'
import { profileActions } from '../pages/profile/store'
import { message } from 'antd'
import { authActions } from '../pages/auth/store'

export const appWatcher = [
  takeLatest(appActions.setInit.type, initHandle)
]

function* initHandle() {
  yield put(appActions.setLoading(true))
  const data = JSON.parse(localStorage.getItem(localStorageDataName))

  if (data) {
    const { token } = data
    const tokenDecoded = jwt_decode(token)
    const { name, role } = tokenDecoded

    if (role === userRoles.superAdmin) {
      const response = yield profileApi.getAllUsers()

      if (response.status === 200) {
        const getAllUsers = yield response.json()
        const { users } = getAllUsers
        yield put(profileActions.setUsers(users))
      } else {
        message.error('Error with getting all users!')
      }
    }

    yield put(profileActions.setUserData({ name, role }))
    yield put(authActions.setIsAuth(true))
  }
  yield put(appActions.setLoading(false))
}
