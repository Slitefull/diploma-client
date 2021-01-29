import { takeEvery } from 'redux-saga/effects'
import { goodsActions } from './store'

export const goodsWatcher = [
  takeEvery(goodsActions.setGoods.type, createGoods)
]

function* createGoods(action) {
  try {

  } catch (e) {

  }
}