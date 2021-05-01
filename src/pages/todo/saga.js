import { call, put, select, takeLatest } from 'redux-saga/effects';
import { message } from 'antd';
import { todoActions } from './store';
import { todoApi } from './api';
import { profileSelectors } from '../profile/selectors';


function* createNewList(action) {
  try {
    yield put(todoActions.setIsLoading(true));
    const userId = yield select(profileSelectors.getUserId);
    const { lists } = yield call(todoApi.createNewList, userId, action.payload);
    yield put(todoActions.setLists(lists));
    yield put(todoActions.setListName(''));
    yield put(todoActions.setIsLoading(false));
  } catch (e) {
    yield put(todoActions.setIsLoading(false));
    yield call(message.error, e);
  }
}

function* deleteListById(action) {
  try {
    yield put(todoActions.setIsLoading(true));
    const userId = yield select(profileSelectors.getUserId);
    const { lists } = yield call(todoApi.deleteListById, userId, action.payload);
    yield put(todoActions.setLists(lists));
    yield put(todoActions.setIsLoading(false));
  } catch (e) {
    yield put(todoActions.setIsLoading(false));
    yield call(message.error, e);
  }
}

function* createTodo(action) {
  try {
    const { id: listId, todo } = action.payload;
    yield put(todoActions.setIsLoading(true));
    const userId = yield select(profileSelectors.getUserId);
    const { lists } = yield call(todoApi.createTodo, userId, listId, todo);
    yield put(todoActions.setLists(lists));
    yield put(todoActions.setTodoName(''));
    yield put(todoActions.setIsLoading(false));
  } catch (e) {
    yield put(todoActions.setIsLoading(false));
    yield call(message.error, e);
  }
}

function* changeTodoStatus(action) {
  try {
    const { listId, todoId, isActive } = action.payload;
    yield put(todoActions.setIsLoading(true));
    const userId = yield select(profileSelectors.getUserId);
    const { lists } = yield call(todoApi.changeTodoStatus, userId, listId, todoId, isActive);
    yield put(todoActions.setLists(lists));
    yield put(todoActions.setTodoName(''));
    yield put(todoActions.setIsLoading(false));
  } catch (e) {
    yield put(todoActions.setIsLoading(false));
    yield call(message.error, e);
  }
}

function* deleteTodo(action) {
  try {
    const { listId, todoId } = action.payload;
    yield put(todoActions.setIsLoading(true));
    const userId = yield select(profileSelectors.getUserId);
    const { lists } = yield call(todoApi.deleteTodo, userId, listId, todoId);
    yield put(todoActions.setLists(lists));
    yield put(todoActions.setIsLoading(false));
  } catch (e) {
    yield put(todoActions.setIsLoading(false));
    yield call(message.error, e);
  }
}

export function* todoWatcher() {
  yield takeLatest(todoActions.createNewList.type, createNewList);
  yield takeLatest(todoActions.deleteListById.type, deleteListById);
  yield takeLatest(todoActions.createTodo.type, createTodo);
  yield takeLatest(todoActions.changeTodoStatus.type, changeTodoStatus);
  yield takeLatest(todoActions.deleteTodo.type, deleteTodo);
}
