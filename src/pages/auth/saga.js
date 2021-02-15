import { put, takeEvery, takeLatest } from 'redux-saga/effects'
import { history } from '../../history'
import { message } from 'antd'
import { appActions } from '../../app/store'
import { authActions } from './store'
import { localStorageDataName } from '../../consts'
import jwt_decode from 'jwt-decode'
import { authApi } from './api'
import { profileActions } from '../profile/store'


export const authWatcher = [
  takeLatest(authActions.login.type, handleLogin),
  takeEvery(authActions.register.type, handleRegister),
  takeLatest(authActions.logout.type, logout)
]

function* handleLogin(action) {
  try {
    yield put(appActions.setLoading(true))

    const response = yield authApi.login(action.payload)
    const { token } = response

    const decodedToken = jwt_decode(token)
    const { name, role } = decodedToken

    yield put(profileActions.setUserData({ name, role }))
    localStorage.setItem(localStorageDataName, JSON.stringify({ token }))

    yield put(authActions.setIsAuth(true))
    yield put(appActions.setLoading(false))
    history.push('/')
  } catch (e) {
    yield put(appActions.setLoading(false))
    return message.error(e.text)
  }
}

function* handleRegister(action) {
  try {
    const data = action.payload;
    const { email, password } = data

    yield put(appActions.setLoading(true))
    yield authApi.register(data)
    yield put(appActions.setLoading(false))

    yield put(authActions.login({ email, password }))
    history.push('/')
  } catch (e) {
    yield put(appActions.setLoading(false))
    return message.error(e.text)
  }
}

function* logout() {
  localStorage.removeItem(localStorageDataName)
  yield put(authActions.setIsAuth(false))
}
