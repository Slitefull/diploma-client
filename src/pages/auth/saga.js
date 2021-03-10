import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { message } from 'antd';
import { history } from '../../history';
import { appActions } from '../../app/store';
import { authActions } from './store';
import { authApi } from './api';
import { errorCatcher } from '../../helpers/errorCatcher';
import { localStorageDataName } from '../../helpers/localStorageHelper';
import { setInitData } from '../../app/saga';


function* handleLogin(action) {
  try {
    yield put(appActions.setLoading(true));

    const response = yield call(authApi.login, action.payload);
    const { token } = response;

    localStorage.setItem(localStorageDataName, JSON.stringify({ token }));

    yield call(setInitData, response);
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
