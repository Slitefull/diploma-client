import { put, takeLatest } from 'redux-saga/effects'
import { history } from '../../history'
import { loginAPI } from './api'
import { message } from 'antd'
import { appActions } from '../../app/store'
import { authActions } from './store'
import { localStorageDataName } from '../../consts'
import { profileActions } from '../profile/store'
import jwt_decode from 'jwt-decode'


export const loginWatcher = [
  takeLatest(authActions.login.type, handleLogin),
  takeLatest(authActions.logout.type, logout)
]

function* handleLogin(action) {
  try {
    yield put(appActions.setLoading(true))

    const response = yield loginAPI.login(action.payload)
    const { token } = response.data

    const decodedToken = jwt_decode(token)
    const { name, role } = decodedToken

    yield put(profileActions.setUserData({ name, role }))
    localStorage.setItem(localStorageDataName, JSON.stringify({ token }))

    yield put(authActions.setIsAuth(true))
    yield put(appActions.setLoading(false))
    history.push('/')
  } catch (e) {
    message.error('Incorrect email or password!')
  }
}

function* logout() {
  localStorage.removeItem(localStorageDataName)
  yield put(authActions.setIsAuth(false))
}