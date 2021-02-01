import { all } from 'redux-saga/effects'
import { appWatcher } from './app/saga'
import { dashboardWatcher } from './pages/dashboard/saga'
import { authWatcher } from './pages/auth/saga'
import { profileWatcher } from './pages/profile/saga'
import { goodsWatcher } from './pages/add-goods/saga'


export function* rootSaga() {
  yield all([
    ...appWatcher,
    ...authWatcher,
    ...profileWatcher,
    ...dashboardWatcher,
    ...goodsWatcher
  ])
}