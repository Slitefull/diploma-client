import jwt_decode from 'jwt-decode'
import { put, takeLatest } from 'redux-saga/effects'
import { dashboardActions } from '../dashboard/store'
import { getToken } from '../../helpers/getToken'
import { localStorageDataName } from '../../consts'
import { message } from 'antd'
import { profileApi } from './api'
import { profileActions } from './store'


export const profileWatcher = [
  takeLatest(profileActions.saveProfileSettings.type, editProfile)
]

function* editProfile(action) {
  try {
    const oldToken = getToken()
    const tokenDecoded = jwt_decode(oldToken)

    const userId = tokenDecoded.userId
    const userData = Object.assign(action.payload, { userId })

    const { token } = yield profileApi.saveProfileSettings(userData)
    const newTokenDecoded = jwt_decode(token)
    const { name } = newTokenDecoded

    localStorage.removeItem(localStorageDataName)
    localStorage.setItem(localStorageDataName, JSON.stringify({ token }))

    yield put(dashboardActions.setUserData({ name }))
  } catch (e) {
    return message.error(e.text)
  }
}
