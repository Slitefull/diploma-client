import i18next from 'i18next';
import { call, put, takeLatest } from 'redux-saga/effects';
import { message } from 'antd';
import { dashboardApi } from './api';
import { dashboardActions } from './store';
import { errorCatcher } from '../../helpers/errorCatcher';


function* makeAdmin(action) {
  try {
    yield call(dashboardApi.makeAdmin, action.payload);

    const { data: users } = yield call(dashboardApi.getAllUsers);
    yield put(dashboardActions.setUsers(users));

    yield call(message.success, i18next.t('newAdminHasBeenAdded'));
  } catch (e) {
    yield call(message.error, errorCatcher(e.text));
  }
}

function* removeAdmin(action) {
  try {
    yield call(dashboardApi.removeAdmin, action.payload);

    const { data: users } = yield call(dashboardApi.getAllUsers);
    yield put(dashboardActions.setUsers(users));

    yield call(message.success, i18next.t('adminHasBeenRemoved'));
  } catch (e) {
    yield call(message.error, errorCatcher(e.text));
  }
}

export const dashboardWatcher = [
  takeLatest(dashboardActions.makeAdmin.type, makeAdmin),
  takeLatest(dashboardActions.removeAdmin.type, removeAdmin),
];
