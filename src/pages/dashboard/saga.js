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

    return message.success('New admin has been added!')
  } catch (e) {
    return message.error(e.text)
  }
}

function* removeAdmin(action) {
  try {
    yield dashboardApi.removeAdmin(action.payload)

    const { data: users } = yield dashboardApi.getAllUsers()
    yield put(dashboardActions.setUsers(users))

    return message.success('Admin has been removed!')
  } catch (e) {
    return message.error(e.text)
  }
}
