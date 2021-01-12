import { all } from 'redux-saga/effects'
import { appWatcher } from './app/saga'
import { loginWatcher } from './pages/login/saga'
import { registerWatcher } from './pages/registration/saga'
import { profileWatcher } from './pages/profile/saga'


export function* rootSaga() {
  yield all([
    ...appWatcher,
    ...registerWatcher,
    ...loginWatcher,
    ...profileWatcher
  ])
}