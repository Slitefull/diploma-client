import jwtDecode from 'jwt-decode';
import { call, put, takeLatest } from 'redux-saga/effects';
import { message } from 'antd';
import i18next from 'i18next';
import { getToken } from '../../helpers/getToken';
import { profileApi } from './api';
import { profileActions } from './store';
import { errorCatcher } from '../../helpers/errorCatcher';
import { localStorageDataName } from '../../helpers/localStorageHelper';


export function* editProfile(action) {
  try {
    const oldToken = getToken();
    const tokenDecoded = jwtDecode(oldToken);

    const { userId } = tokenDecoded;
    const userData = { ...action.payload, userId };

    const { token } = yield call(profileApi.saveProfileSettings, userData);
    const newTokenDecoded = jwtDecode(token);
    const { name, email, surname, userName, role, avatar, address, city, postalCode, status } = newTokenDecoded;

    localStorage.removeItem(localStorageDataName);
    localStorage.setItem(localStorageDataName, JSON.stringify({ token }));

    yield put(profileActions.setUserData({
      userId,
      name,
      role,
      surname,
      userName,
      email,
      avatar,
      address,
      city,
      postalCode,
      status,
    }));
    yield call(message.success, i18next.t('userDataHasBeenChanged'));
  } catch (e) {
    yield call(message.error, errorCatcher(e.text));
  }
}

export const profileWatcher = [
  takeLatest(profileActions.saveProfileSettings.type, editProfile),
];
