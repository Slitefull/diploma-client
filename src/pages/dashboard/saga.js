import { put, takeLatest } from 'redux-saga/effects'
import { dashboardApi } from './api'
import { message } from 'antd'
import { dashboardActions } from './store'


export const dashboardWatcher = [
  takeLatest(dashboardActions.makeAdmin.type, makeAdmin),
  takeLatest(dashboardActions.removeAdmin.type, removeAdmin)
]

function* makeAdmin({ payload: userId }) {
  try {
    const makeAdmin = yield dashboardApi.makeAdmin(userId)

    if (makeAdmin.status === 200) {
      const { data: users } = yield dashboardApi.getAllUsers()
      yield put(dashboardActions.setUsers(users))

      return message.success('New admin has been added!')
    }
  } catch (e) {
    message.error('Something went wrong! Try again later')
  }
}

function* removeAdmin({ payload: userId }) {
  try {
    const removeAdmin = yield dashboardApi.removeAdmin(userId)

    if (removeAdmin.status === 200) {
      const { data: users } = yield dashboardApi.getAllUsers()
      yield put(dashboardActions.setUsers(users))

      return message.success('Admin has been removed!')
    }
  } catch (e) {
    message.error('Something went wrong! Try again later')
  }
}
