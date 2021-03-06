import jwtDecode from 'jwt-decode';
import { put, takeLatest } from 'redux-saga/effects';
import { message } from 'antd';
import { dashboardActions } from '../dashboard/store';
import { getToken } from '../../helpers/getToken';
import { profileApi } from './api';
import { profileActions } from './store';
import { errorCatcher } from '../../helpers/errorCatcher';
import { localStorageDataName } from '../../helpers/localStorageHelper';


function* editProfile(action) {
  try {
    const oldToken = getToken();
    const tokenDecoded = jwtDecode(oldToken);

    const { userId } = tokenDecoded;
    const userData = Object.assign(action.payload, { userId });

    const { token } = yield profileApi.saveProfileSettings(userData);
    const newTokenDecoded = jwtDecode(token);
    const { name } = newTokenDecoded;

    localStorage.removeItem(localStorageDataName);
    localStorage.setItem(localStorageDataName, JSON.stringify({ token }));

    yield put(dashboardActions.setUserData({ name }));
  } catch (e) {
    message.error(errorCatcher(e.text));
  }
}

export const profileWatcher = [
  takeLatest(profileActions.saveProfileSettings.type, editProfile),
];
