import { takeLatest } from 'redux-saga/effects'
import { goodsActions } from './store'
import { message } from 'antd'
import { goodsApi } from './api'


export const goodsWatcher = [
  takeLatest(goodsActions.createGoods.type, createGoods)
]

function* createGoods(action) {
  try {
    const response = yield goodsApi.createGoods(action.payload)
    console.log(response)
    //TODO check response status
    if (response.status === 400) message.error('Commodity already exist')
    message.success('New commodity has been created!')
  } catch (e) {
    message.error('Something went wrong, try again later!')
  }
}