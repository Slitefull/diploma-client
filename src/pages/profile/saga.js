import { put, takeLatest } from 'redux-saga/effects'
import jwt_decode from 'jwt-decode'
import { getToken } from '../../helpers/getToken'
import { localStorageDataName } from '../../consts'
import { profileActions } from './store'
import { profileApi } from './api'
import { message } from 'antd'


export const profileWatcher = [
  takeLatest(profileActions.saveProfileSettings.type, editProfile),
  takeLatest(profileActions.makeAdmin.type, makeAdmin),
  takeLatest(profileActions.removeAdmin.type, removeAdmin)
]

function* editProfile(action) {
  try {
    const oldToken = getToken()
    const tokenDecoded = jwt_decode(oldToken)

    const userId = tokenDecoded.userId
    const userData = Object.assign(action.payload, { userId })

    const response = yield profileApi.saveProfileSettings(userData)
    const { token } = response

    const newTokenDecoded = jwt_decode(token)
    const { name } = newTokenDecoded

    if (response.status === 200) {
      localStorage.removeItem(localStorageDataName)
      localStorage.setItem(localStorageDataName, JSON.stringify({ token }))

      yield put(profileActions.setUserData({ name }))
    }
  } catch (e) {
    message.error('Something went wrong! Try again later')
  }
}

function* makeAdmin({ payload:userId }) {
  try {
    const makeAdmin = yield profileApi.makeAdmin(userId)

    if (makeAdmin.status === 200) {
      const { data:users } = yield profileApi.getAllUsers()
      yield put(profileActions.setUsers(users))

      return message.success('New admin has been added!')
    }
  } catch (e) {
    message.error('Something went wrong! Try again later')
  }
}

function* removeAdmin({ payload:userId }) {
  try {
    const removeAdmin = yield profileApi.removeAdmin(userId)

    if (removeAdmin.status === 200) {
      const { data:users } = yield profileApi.getAllUsers()
      yield put(profileActions.setUsers(users))

      return message.success('Admin has been removed!')
    }
  } catch (e) {
    message.error('Something went wrong! Try again later')
  }
}
