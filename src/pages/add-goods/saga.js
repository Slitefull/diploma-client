import i18next from 'i18next';
import { takeLatest } from 'redux-saga/effects';
import { message } from 'antd';
import { goodsActions } from './store';
import { goodsApi } from './api';
import { errorCatcher } from '../../helpers/errorCatcher';


function* createGoods(action) {
  try {
    yield goodsApi.createGoods(action.payload);
    return message.success(i18next.t('newCommodityHasBeenCreated'));
  } catch (e) {
    return message.error(errorCatcher(e.text));
  }
}

function* createCategory(action) {
  try {
    yield goodsApi.createCategory(action.payload);
    return message.success(i18next.t('newCategoryHasBeenCreated'));
  } catch (e) {
    return message.error(errorCatcher(e.text));
  }
}

export const goodsWatcher = [
  takeLatest(goodsActions.createGoods.type, createGoods),
  takeLatest(goodsActions.createCategory.type, createCategory),
];
