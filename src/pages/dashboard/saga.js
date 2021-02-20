import i18next from 'i18next';
import { put, takeLatest } from 'redux-saga/effects';
import { message } from 'antd';
import { dashboardApi } from './api';
import { dashboardActions } from './store';
import { errorCatcher } from '../../helpers/errorCatcher';


export const dashboardWatcher = [
  takeLatest(dashboardActions.makeAdmin.type, makeAdmin),
  takeLatest(dashboardActions.removeAdmin.type, removeAdmin),
];

function* makeAdmin(action) {
  try {
    yield dashboardApi.makeAdmin(action.payload);

    const { data: users } = yield dashboardApi.getAllUsers();
    yield put(dashboardActions.setUsers(users));

    return message.success(i18next.t('newAdminHasBeenAdded'));
  } catch (e) {
    return message.error(errorCatcher(e.text));
  }
}

function* removeAdmin(action) {
  try {
    yield dashboardApi.removeAdmin(action.payload);

    const { data: users } = yield dashboardApi.getAllUsers();
    yield put(dashboardActions.setUsers(users));

    return message.success(i18next.t('adminHasBeenRemoved'));
  } catch (e) {
    return message.error(errorCatcher(e.text));
  }
}
