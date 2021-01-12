import { all } from 'redux-saga/effects'
import { appWatcher } from './app/saga'
import { profileWatcher } from './pages/profile/saga'
import { authWatcher } from './pages/auth/saga'


export function* rootSaga() {
  yield all([
    ...appWatcher,
    ...authWatcher,
    ...profileWatcher
  ])
}