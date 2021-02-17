import { put, takeLatest } from 'redux-saga/effects'
import { appActions } from './store'
import jwt_decode from 'jwt-decode'
import { userRoles } from '../helpers/getRole'
import { message } from 'antd'
import { authActions } from '../pages/auth/store'
import { dashboardApi } from '../pages/dashboard/api'
import { dashboardActions } from '../pages/dashboard/store'
import { profileActions } from '../pages/profile/store'
import { goodsApi } from '../pages/add-goods/api'
import { goodsActions } from '../pages/add-goods/store'
import { getLocalStorageLocale, localStorageDataName } from '../helpers/localStorageHelper'


export const appWatcher = [
  takeLatest(appActions.setInit.type, initHandle)
]

function* initHandle() {
  try {
    const locale = getLocalStorageLocale()
    locale ? yield put(appActions.setLocale(locale)) : yield put(appActions.setLocale('en'))

    yield put(appActions.setLoading(true))
    const data = JSON.parse(localStorage.getItem(localStorageDataName))

    if (data) {
      const { token } = data
      const tokenDecoded = jwt_decode(token)
      const { name, role } = tokenDecoded

      if (role === userRoles.superAdmin) {
        const getAllUsers = yield dashboardApi.getAllUsers()
        const { users } = getAllUsers
        yield put(dashboardActions.setUsers(users))

        const getAllGoods = yield goodsApi.getAllGoods()
        const { goodsCount, goods } = getAllGoods
        yield put(goodsActions.setGoodsCount(goodsCount))
        yield put(goodsActions.setGoods(goods))

        const getAllCategories = yield goodsApi.getAllCategories()
        const { categories, categoriesCount } = getAllCategories
        yield put(goodsActions.setCategories(categories))
        yield put(goodsActions.setCategoriesCount(categoriesCount))
      }

      yield put(profileActions.setUserData({ name, role }))
      yield put(authActions.setIsAuth(true))
    }
    yield put(appActions.setLoading(false))
  } catch (e) {
    yield put(appActions.setLoading(false))
    return message.error('Something went wrong! Try again later')
  }
}
