import i18next from 'i18next';
import { takeLatest, call } from 'redux-saga/effects';
import { message } from 'antd';
import { goodsActions } from './store';
import { goodsApi } from './api';
import { errorCatcher } from '../../helpers/errorCatcher';


function* createGoods(action) {
  try {
    yield call(goodsApi.createGoods, action.payload);
    yield call(message.success, i18next.t('newCommodityHasBeenCreated'));
  } catch (e) {
    yield call(message.error, errorCatcher(e.text));
  }
}

function* createCategory(action) {
  try {
    yield call(goodsApi.createCategory, action.payload);
    yield call(message.success, i18next.t('newCategoryHasBeenCreated'));
  } catch (e) {
    yield call(message.error, errorCatcher(e.text));
  }
}

export const goodsWatcher = [
  takeLatest(goodsActions.createGoods.type, createGoods),
  takeLatest(goodsActions.createCategory.type, createCategory),
];
