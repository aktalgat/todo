import {call, fork, put, takeEvery} from 'redux-saga/effects';
import { TodoActions } from "app/actions";
import api from '../api';

export function* fetchTodos(data: any) {
  yield put(TodoActions.getAllRequest(data));
  try {
    const { response, error } = yield call(api.todos.get, data.payload);
    if (response) {
      yield put(TodoActions.getAllDone(response))
    } else {
      yield put(TodoActions.getAllFail(error))
    }
  } catch (e) {
    yield put(TodoActions.getAllFail(e))
  }
}

export function* watchFetchTodos() {
  yield takeEvery(TodoActions.Type.GET_ALL, fetchTodos)
}

export function* addTodo(data: any) {
  yield put(TodoActions.addRequest(data));
  try {
    const { response, error } = yield call(api.todos.set, data.payload);
    if (response) {
      yield put(TodoActions.addDone(response));
    } else {
      yield put(TodoActions.addFail(error));
    }
  } catch (e) {
    yield put(TodoActions.addFail(e));
  }

}

export function* watchAddTodo() {
  yield takeEvery(TodoActions.Type.ADD_TODO, addTodo);
}

export function* checkTodo(data: any) {
  yield put(TodoActions.checkRequest(data));
  try {
    const { response, error } = yield call(api.todos.check, data.payload);
    if (response) {
      yield put(TodoActions.checkDone(response));
    } else {
      yield put(TodoActions.checkFail(error));
    }
  } catch (e) {
    yield put(TodoActions.checkFail(e));
  }
}

export function* watchCheckTodo() {
  yield takeEvery(TodoActions.Type.CHECK_TODO, checkTodo);
}

export function* removeTodo(data: any) {
  yield put(TodoActions.removeTodoRequest(data));
  try {
    const { response, error } = yield call(api.todos.remove, data.payload);
    if (response) {
      yield put(TodoActions.removeTodoDone(response));
    } else {
      yield put(TodoActions.removeTodoFail(error));
    }
  } catch (e) {
    yield put(TodoActions.removeTodoFail(e));
  }
}

export function* watchRemoveTodo() {
  yield takeEvery(TodoActions.Type.REMOVE_TODO, removeTodo);
}

export function* startup() {
  yield fork(fetchTodos, {})
}

export default function* root() {
  yield fork(startup);

  yield fork(watchFetchTodos);
  yield fork(watchAddTodo);
  yield fork(watchCheckTodo);
  yield fork(watchRemoveTodo);
}
