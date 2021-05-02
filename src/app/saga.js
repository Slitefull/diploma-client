import { call, put, takeLatest } from 'redux-saga/effects';
import jwtDecode from 'jwt-decode';
import { message } from 'antd';
import { appActions } from './store';
import { authActions } from '../pages/auth/store';
import { dashboardApi } from '../pages/dashboard/api';
import { dashboardActions } from '../pages/dashboard/store';
import { profileActions } from '../pages/profile/store';
import { goodsApi } from '../pages/add-goods/api';
import { goodsActions } from '../pages/add-goods/store';
import { getLocalStorageLocale, localStorageDataName } from '../helpers/localStorageHelper';
import { userRoles } from '../helpers/getRole';
import { todoApi } from '../pages/todo/api';
import { todoActions } from '../pages/todo/store';
import { getLocalStorageCurrentMenuItem } from '../constants/menu';
import { sidebarActions } from '../components/sidebar/store';


export function* setInitData(token) {
  try {
    const tokenDecoded = jwtDecode(token);
    const { userId, name, surname, userName, email, role, avatar, address, city, postalCode, status } = tokenDecoded;

    if (role === userRoles.superAdmin) {
      const { users } = yield call(dashboardApi.getAllUsers);
      yield put(dashboardActions.setUsers(users));

      const { goods } = yield call(goodsApi.getAllGoods);
      yield put(goodsActions.setGoods(goods));

      const { categories } = yield call(goodsApi.getAllCategories);
      yield put(goodsActions.setCategories(categories));

      const { lists } = yield call(todoApi.getAllLists, userId);
      yield put(todoActions.setLists(lists));
    }

    if (getLocalStorageCurrentMenuItem()) {
      yield put(sidebarActions.setCurrentMenuItem(getLocalStorageCurrentMenuItem()));
    }

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
    yield put(authActions.setIsAuth(true));
    yield put(appActions.setLoading(false));
  } catch (e) {
    yield put(appActions.setLoading(false));
    yield call(message.error, e);
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
    if (data) {
      const { token } = data;
      yield call(setInitData, token);
    } else {
      yield put(appActions.setLoading(false));
    }
  } catch (e) {
    yield put(appActions.setLoading(false));
    yield call(message.error, e);
  }
}

export function* appWatcher() {
  yield takeLatest(appActions.setInit.type, initHandle);
}
