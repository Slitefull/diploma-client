import { takeLatest } from 'redux-saga/effects'
import { goodsActions } from './store'
import { message } from 'antd'
import { goodsApi } from './api'


export const goodsWatcher = [
  takeLatest(goodsActions.createGoods.type, createGoods),
  takeLatest(goodsActions.createCategory.type, createCategory)
]

function* createGoods(action) {
  try {
    const response = yield goodsApi.createGoods(action.payload)
    if (response.status === 201) {
      return message.success('New commodity has been created!')
    } else {
      return message.success('Commodity is already exist')
    }
  } catch (e) {
    return message.error('Something went wrong! Try again later')
  }
}

function* createCategory(action) {
  try {
    const response = yield goodsApi.createCategory(action.payload)
    if (response.status === 201) {
      return message.success('New category has been created!')
    } else {
      return message.success('Category is already exist')
    }
  } catch (e) {
    return message.error('Something went wrong! Try again later')
  }
}
