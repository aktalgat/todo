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

    CHECK_TODO = 'CHECK_TODO',

    DELETE_TODO = 'DELETE_TODO',

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
  export const check = createAction(Type.CHECK_TODO, (todo: any) => todo);
  export const deleteTodo = createAction(Type.DELETE_TODO, (todo: any) => todo);

  export const editTitle = createAction(Type.EDIT_TITLE, (title: any) => title);
}
