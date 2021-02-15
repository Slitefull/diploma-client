import i18next from 'i18next'
import { put, takeLatest } from 'redux-saga/effects'
import { dashboardApi } from './api'
import { message } from 'antd'
import { dashboardActions } from './store'


export const dashboardWatcher = [
  takeLatest(dashboardActions.makeAdmin.type, makeAdmin),
  takeLatest(dashboardActions.removeAdmin.type, removeAdmin)
]

function* makeAdmin(action) {
  try {
    yield dashboardApi.makeAdmin(action.payload)

    const { data: users } = yield dashboardApi.getAllUsers()
    yield put(dashboardActions.setUsers(users))

    return message.success(i18next.t("newAdminHasBeenAdded"))
  } catch (e) {
    return message.error(e.text)
  }
}

function* removeAdmin(action) {
  try {
    yield dashboardApi.removeAdmin(action.payload)

    const { data: users } = yield dashboardApi.getAllUsers()
    yield put(dashboardActions.setUsers(users))

    return message.success(i18next.t("adminHasBeenRemoved"))
  } catch (e) {
    return message.error(e.text)
  }
}
