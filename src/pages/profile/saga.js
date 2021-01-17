import { put, takeLatest } from 'redux-saga/effects'
import { dashboardActions } from '../dashboard/store'
import { getToken } from '../../helpers/getToken'
import jwt_decode from 'jwt-decode'
import { localStorageDataName } from '../../consts'
import { message } from 'antd'
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

    const response = yield profileActions.saveProfileSettings(userData)
    const { token } = response

    const newTokenDecoded = jwt_decode(token)
    const { name } = newTokenDecoded

    if (response.status === 200) {
      localStorage.removeItem(localStorageDataName)
      localStorage.setItem(localStorageDataName, JSON.stringify({ token }))

      yield put(dashboardActions.setUserData({ name }))
    }
  } catch (e) {
    message.error('Something went wrong! Try again later')
  }
}
