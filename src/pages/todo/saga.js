import { call, select, takeLatest } from 'redux-saga/effects';
import { message } from 'antd';
import { todoActions } from './store';
import { errorCatcher } from '../../helpers/errorCatcher';
import { todoSelectors } from './selectors';
import { todoApi } from './api';
import { profileSelectors } from '../profile/selectors';


function* createTodo(action) {
  try {
    const isExist = yield select(todoSelectors.getIsExistTodo);
    const userId = yield select(profileSelectors.getUserId);

    if (!isExist) {
      yield call(todoApi.createTodo, userId, action.payload);
    } else {
      message.error('This todo is already exist!');
    }
  } catch (e) {
    yield call(message.error, errorCatcher(e.text));
  }
}

export const todoWatcher = [
  takeLatest(todoActions.createTodo.type, createTodo),
];
