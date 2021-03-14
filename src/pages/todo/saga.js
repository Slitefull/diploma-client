import { call, select, takeLatest } from 'redux-saga/effects';
import { message } from 'antd';
import { todoActions } from './store';
import { errorCatcher } from '../../helpers/errorCatcher';
import { todoApi } from './api';
import { profileSelectors } from '../profile/selectors';


function* createNewList(action) {
  try {
    const userId = yield select(profileSelectors.getUserId);
    yield call(todoApi.createNewList, userId, action.payload);
  } catch (e) {
    yield call(message.error, errorCatcher(e.text));
  }
}

export const todoWatcher = [
  takeLatest(todoActions.createNewList.type, createNewList),
];
