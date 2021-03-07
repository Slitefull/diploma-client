import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { message } from 'antd';
import jwtDecode from 'jwt-decode';
import { history } from '../../history';
import { appActions } from '../../app/store';
import { authActions } from './store';
import { authApi } from './api';
import { profileActions } from '../profile/store';
import { errorCatcher } from '../../helpers/errorCatcher';
import { localStorageDataName } from '../../helpers/localStorageHelper';


function* handleLogin(action) {
  try {
    yield put(appActions.setLoading(true));

    const response = yield call(authApi.login, action.payload);
    const { token } = response;

    const decodedToken = jwtDecode(token);
    const { name, surname, email, role } = decodedToken;

    yield put(profileActions.setUserData({ name, surname, email, role }));
    localStorage.setItem(localStorageDataName, JSON.stringify({ token }));

    yield put(authActions.setIsAuth(true));
    yield put(appActions.setLoading(false));
    history.push('/');
  } catch (e) {
    yield put(appActions.setLoading(false));
    yield call(message.error, errorCatcher(e.text));
  }
}

function* handleRegister(action) {
  try {
    const data = action.payload;
    const { email, password } = data;

    yield put(appActions.setLoading(true));
    yield call(authApi.register, data);
    yield put(appActions.setLoading(false));

    yield put(authActions.login({ email, password }));
    history.push('/');
  } catch (e) {
    yield put(appActions.setLoading(false));
    yield call(message.error, errorCatcher(e.text));
  }
}

function* logout() {
  localStorage.removeItem(localStorageDataName);
  yield put(authActions.setIsAuth(false));
  history.push('/login');
}

export const authWatcher = [
  takeLatest(authActions.login.type, handleLogin),
  takeEvery(authActions.register.type, handleRegister),
  takeLatest(authActions.logout.type, logout),
];
