import { call, put, select, takeLatest } from 'redux-saga/effects';
import { message } from 'antd';
import { todoActions } from './store';
import { todoApi } from './api';
import { profileSelectors } from '../profile/selectors';
import { todoSelectors } from './selectors';


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
  const { listId, todo } = action.payload;
  const selectedList = yield select(todoSelectors.getAllTodosByListId(listId));
  const selectedTodo = selectedList.todos.find((item) => item.todo === todo);
  yield selectedTodo.status = !selectedTodo.status;
}

export function* todoWatcher() {
  yield takeLatest(todoActions.createNewList.type, createNewList);
  yield takeLatest(todoActions.deleteListById.type, deleteListById);
  yield takeLatest(todoActions.createTodo.type, createTodo);
  yield takeLatest(todoActions.changeTodoStatus.type, changeTodoStatus);
}
