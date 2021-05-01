import i18next from 'i18next';
import { call, put, takeLatest } from 'redux-saga/effects';
import { message } from 'antd';
import { dashboardApi } from './api';
import { dashboardActions } from './store';


export function* makeAdmin(action) {
  try {
    yield call(dashboardApi.makeAdmin, action.payload);

    const { data: users } = yield call(dashboardApi.getAllUsers);
    yield put(dashboardActions.setUsers(users));

    yield call(message.success, i18next.t('newAdminHasBeenAdded'));
  } catch (e) {
    yield call(message.error, e);
  }
}

export function* removeAdmin(action) {
  try {
    yield call(dashboardApi.removeAdmin, action.payload);

    const { data: users } = yield call(dashboardApi.getAllUsers);
    yield put(dashboardActions.setUsers(users));

    yield call(message.success, i18next.t('adminHasBeenRemoved'));
  } catch (e) {
    yield call(message.error, e);
  }
}

export function* dashboardWatcher() {
  yield takeLatest(dashboardActions.makeAdmin.type, makeAdmin);
  yield takeLatest(dashboardActions.removeAdmin.type, removeAdmin);
}
