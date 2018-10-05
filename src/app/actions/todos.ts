import { createAction } from 'redux-actions';

export namespace TodoActions {
  export enum Type {
    GET_ALL = 'GET_ALL',
    GET_ALL_REQUEST = 'GET_ALL_REQUEST',
    GET_ALL_DONE = 'GET_ALL_DONE',
    GET_ALL_FAIL = 'GET_ALL_FAIL',

    ADD_TODO = 'ADD_TODO',
    ADD_TODO_REQUEST = 'ADD_TODO_REQUEST',
    ADD_TODO_DONE = 'ADD_TODO_DONE',
    ADD_TODO_FAIL = 'ADD_TODO_FAIL',

    EDIT_TODO = 'EDIT_TODO',
    EDIT_TODO_REQUEST = 'EDIT_TODO_REQUEST',
    EDIT_TODO_DONE = 'EDIT_TODO_DONE',
    EDIT_TODO_FAIL = 'EDIT_TODO_FAIL',

    CHECK_TODO = 'CHECK_TODO',
    CHECK_TODO_REQUEST = 'CHECK_TODO_REQUEST',
    CHECK_TODO_DONE = 'CHECK_TODO_DONE',
    CHECK_TODO_FAIL = 'CHECK_TODO_FAIL',

    REMOVE_TODO = 'REMOVE_TODO',
    REMOVE_TODO_REQUEST = 'REMOVE_TODO_REQUEST',
    REMOVE_TODO_DONE = 'REMOVE_TODO_DONE',
    REMOVE_TODO_FAIL = 'REMOVE_TODO_FAIL',

    EDIT_TITLE = 'EDIT_TITLE'
  }

  export const getAll = createAction(Type.GET_ALL, (products: any) => products);
  export const getAllRequest = createAction(Type.GET_ALL_REQUEST, (products: any) => products);
  export const getAllDone = createAction(Type.GET_ALL_DONE, (products: any) => products);
  export const getAllFail = createAction(Type.GET_ALL_FAIL, (error: any) => error);

  export const add = createAction(Type.ADD_TODO, (todo: any) => todo);
  export const addRequest = createAction(Type.ADD_TODO_REQUEST, (todo: any) => todo);
  export const addDone = createAction(Type.ADD_TODO_DONE, (todo: any) => todo);
  export const addFail = createAction(Type.ADD_TODO_FAIL, (todo: any) => todo);

  export const editTodo = createAction(Type.EDIT_TODO, (todo: any) => todo);
  export const editTodoRequest = createAction(Type.EDIT_TODO_REQUEST, (todo: any) => todo);
  export const editTodoDone = createAction(Type.EDIT_TODO_DONE, (todo: any) => todo);
  export const editTodoFail = createAction(Type.EDIT_TODO_FAIL, (todo: any) => todo);

  export const check = createAction(Type.CHECK_TODO, (todo: any) => todo);
  export const checkRequest = createAction(Type.CHECK_TODO_REQUEST, (todo: any) => todo);
  export const checkDone = createAction(Type.CHECK_TODO_DONE, (todo: any) => todo);
  export const checkFail = createAction(Type.CHECK_TODO_FAIL, (todo: any) => todo);

  export const removeTodo = createAction(Type.REMOVE_TODO, (todo: any) => todo);
  export const removeTodoRequest = createAction(Type.REMOVE_TODO_REQUEST, (todo: any) => todo);
  export const removeTodoDone = createAction(Type.REMOVE_TODO_DONE, (todo: any) => todo);
  export const removeTodoFail = createAction(Type.REMOVE_TODO_FAIL, (todo: any) => todo);

  export const editTitle = createAction(Type.EDIT_TITLE, (title: any) => title);
}
