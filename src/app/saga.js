import { call, put, takeLatest } from 'redux-saga/effects';
import jwtDecode from 'jwt-decode';
import { message } from 'antd';
import { appActions } from './store';
import { userRoles } from '../helpers/getRole';
import { authActions } from '../pages/auth/store';
import { dashboardApi } from '../pages/dashboard/api';
import { dashboardActions } from '../pages/dashboard/store';
import { profileActions } from '../pages/profile/store';
import { goodsApi } from '../pages/add-goods/api';
import { goodsActions } from '../pages/add-goods/store';
import { getLocalStorageLocale, localStorageDataName } from '../helpers/localStorageHelper';
import { errorCatcher } from '../helpers/errorCatcher';


export function* setInitData(data) {
  try {
    const { token } = data;
    const tokenDecoded = jwtDecode(token);
    const { name, surname, userName, email, role } = tokenDecoded;

    if (role === userRoles.superAdmin) {
      const getAllUsers = yield call(dashboardApi.getAllUsers);
      const { users } = getAllUsers;
      yield put(dashboardActions.setUsers(users));

      const getAllGoods = yield call(goodsApi.getAllGoods);
      const { goods } = getAllGoods;
      yield put(goodsActions.setGoods(goods));

      const getAllCategories = yield call(goodsApi.getAllCategories);
      const { categories } = getAllCategories;
      yield put(goodsActions.setCategories(categories));
    }
    yield put(profileActions.setUserData({ name, role, surname, userName, email }));
    yield put(authActions.setIsAuth(true));
    yield put(appActions.setLoading(false));
  } catch (e) {
    yield put(appActions.setLoading(false));
    yield call(message.error, errorCatcher(e.text));
  }
}

export function* initHandle() {
  try {
    yield put(appActions.setLoading(true));
    const locale = getLocalStorageLocale();

    if (locale) {
      yield put(appActions.setLocale(locale));
    } else {
      yield put(appActions.setLocale('en'));
    }

    const data = JSON.parse(localStorage.getItem(localStorageDataName));
    if (data) yield call(setInitData, data);
  } catch (e) {
    yield put(appActions.setLoading(false));
    yield call(message.error, errorCatcher(e.text));
  }
}

export const appWatcher = [
  takeLatest(appActions.setInit.type, initHandle),
];
