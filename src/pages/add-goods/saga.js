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
    yield goodsApi.createGoods(action.payload)
    return message.success('New commodity has been created!')
  } catch (e) {
    return message.error(e.text)
  }
}

function* createCategory(action) {
  try {
    yield goodsApi.createCategory(action.payload)
    return message.success('New category has been created!')
  } catch (e) {
    return message.error(e.text)
  }
}
