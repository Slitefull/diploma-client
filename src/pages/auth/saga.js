import { call, put, takeLatest } from 'redux-saga/effects';
import { message } from 'antd';
import { history } from '../../history';
import { appActions } from '../../app/store';
import { authActions } from './store';
import { authApi } from './api';
import { localStorageDataName } from '../../helpers/localStorageHelper';
import { setInitData } from '../../app/saga';


export function* handleLogin(action) {
  try {
    yield put(appActions.setLoading(true));

    const { token } = yield call(authApi.login, action.payload);
    localStorage.setItem(localStorageDataName, JSON.stringify({ token }));

    yield call(setInitData, token);
    history.push('/');
  } catch (e) {
    yield put(appActions.setLoading(false));
    yield call(message.error, e);
  }
}

export function* handleRegister(action) {
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
    yield call(message.error, e);
  }
}

export function* logout() {
  localStorage.removeItem(localStorageDataName);
  yield put(authActions.setIsAuth(false));
  history.push('/login');
}

export function* authWatcher() {
  yield takeLatest(authActions.login.type, handleLogin);
  yield takeLatest(authActions.register.type, handleRegister);
  yield takeLatest(authActions.logout.type, logout);
}
